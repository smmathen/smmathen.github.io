import React, { useEffect, useMemo, useRef, useState } from "react";

const VIRTUAL_W = 860;
const VIRTUAL_H = 520;
const SCORE_TO_WIN = 11;

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function randSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

export default function TennisPongGame({ mode, isOpen }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);
  const pressedRef = useRef(new Set());

  const [size, setSize] = useState({ w: 860, h: 520 });
  const [score, setScore] = useState({ left: 0, right: 0 });
  const [paused, setPaused] = useState(false);

  const gameRef = useRef(null);

  const scale = useMemo(() => {
    const s = Math.min(size.w / VIRTUAL_W, size.h / VIRTUAL_H);
    return { s, dx: (size.w - VIRTUAL_W * s) / 2, dy: (size.h - VIRTUAL_H * s) / 2 };
  }, [size]);

  const resetRound = (serveTo = "random") => {
    const g = gameRef.current;
    if (!g) return;
    g.ball.x = VIRTUAL_W / 2;
    g.ball.y = VIRTUAL_H / 2;

    const base = 340;
    const vx = base * (serveTo === "left" ? -1 : serveTo === "right" ? 1 : randSign());
    g.ball.vx = vx;
    g.ball.vy = (140 + Math.random() * 120) * randSign();
  };

  const resetGame = () => {
    const initial = {
      left: {
        x: 26,
        y: VIRTUAL_H / 2,
        vy: 0,
      },
      right: {
        x: VIRTUAL_W - 26,
        y: VIRTUAL_H / 2,
        vy: 0,
      },
      racket: { w: 12, h: 86, speed: 420 },
      ball: { r: 7, x: VIRTUAL_W / 2, y: VIRTUAL_H / 2, vx: 340 * randSign(), vy: 180 * randSign() },
      ai: { maxSpeed: 320, reaction: 0.12, targetY: VIRTUAL_H / 2 },
    };
    gameRef.current = initial;
    setScore({ left: 0, right: 0 });
    setPaused(false);
  };

  useEffect(() => {
    resetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (!rect) return;
      const w = Math.max(320, Math.floor(rect.width));
      const h = Math.floor(Math.min(560, Math.max(320, rect.width * 0.62)));
      setSize({ w, h });
    });

    ro.observe(parent);
    return () => ro.disconnect();
  }, [isOpen]);

  useEffect(() => {
    const onDown = (e) => {
      if (!isOpen) return;
      pressedRef.current.add(e.key.toLowerCase());
      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        setPaused((p) => !p);
      }
      if (e.key.toLowerCase() === "r") {
        resetGame();
        resetRound("random");
      }
    };
    const onUp = (e) => pressedRef.current.delete(e.key.toLowerCase());
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tick = (ts) => {
      rafRef.current = window.requestAnimationFrame(tick);
      const last = lastTsRef.current || ts;
      lastTsRef.current = ts;
      const dt = clamp((ts - last) / 1000, 0, 0.032);

      const g = gameRef.current;
      if (!g) return;

      if (!paused) {
        // player inputs
        const keys = pressedRef.current;
        const upLeft = keys.has("w");
        const downLeft = keys.has("s");
        const upRight = keys.has("arrowup");
        const downRight = keys.has("arrowdown");

        const racket = g.racket;
        const halfH = racket.h / 2;

        const leftDir = (downLeft ? 1 : 0) - (upLeft ? 1 : 0);
        g.left.y = clamp(g.left.y + leftDir * racket.speed * dt, halfH + 14, VIRTUAL_H - halfH - 14);

        if (mode === "two") {
          const rightDir = (downRight ? 1 : 0) - (upRight ? 1 : 0);
          g.right.y = clamp(g.right.y + rightDir * racket.speed * dt, halfH + 14, VIRTUAL_H - halfH - 14);
        } else {
          // simple beatable AI
          const ball = g.ball;
          const ai = g.ai;
          const bias = 10 * Math.sin(ts / 900);
          const desired = clamp(ball.y + bias, halfH + 14, VIRTUAL_H - halfH - 14);
          ai.targetY = ai.targetY + (desired - ai.targetY) * ai.reaction;
          const dy = ai.targetY - g.right.y;
          const maxStep = ai.maxSpeed * dt;
          g.right.y = g.right.y + clamp(dy, -maxStep, maxStep);
        }

        // ball physics
        const ball = g.ball;
        ball.x += ball.vx * dt;
        ball.y += ball.vy * dt;

        // wall bounce
        if (ball.y - ball.r < 14) {
          ball.y = 14 + ball.r;
          ball.vy *= -1;
        } else if (ball.y + ball.r > VIRTUAL_H - 14) {
          ball.y = VIRTUAL_H - 14 - ball.r;
          ball.vy *= -1;
        }

        // racket collisions
        const collideRacket = (side) => {
          const r = side === "left" ? g.left : g.right;
          const dir = side === "left" ? 1 : -1;
          const rx = r.x;
          const ry = r.y;

          const hitX =
            side === "left"
              ? ball.x - ball.r <= rx + racket.w / 2 && ball.x - ball.r >= rx - racket.w / 2 - 10
              : ball.x + ball.r >= rx - racket.w / 2 && ball.x + ball.r <= rx + racket.w / 2 + 10;
          const hitY = Math.abs(ball.y - ry) <= racket.h / 2 + ball.r;
          const approaching = side === "left" ? ball.vx < 0 : ball.vx > 0;
          if (!(hitX && hitY && approaching)) return;

          const offset = (ball.y - ry) / (racket.h / 2);
          const angle = offset * (Math.PI / 3.6); // up to ~50deg
          const speed = clamp(Math.hypot(ball.vx, ball.vy) * 1.03, 300, 720);

          ball.vx = Math.cos(angle) * speed * dir;
          ball.vy = Math.sin(angle) * speed;

          // nudge out so we don't re-collide next frame
          if (side === "left") ball.x = rx + racket.w / 2 + ball.r + 0.5;
          else ball.x = rx - racket.w / 2 - ball.r - 0.5;
        };

        collideRacket("left");
        collideRacket("right");

        // score
        if (ball.x + ball.r < 0) {
          setScore((s) => {
            const next = { ...s, right: s.right + 1 };
            return next;
          });
          resetRound("left");
        } else if (ball.x - ball.r > VIRTUAL_W) {
          setScore((s) => {
            const next = { ...s, left: s.left + 1 };
            return next;
          });
          resetRound("right");
        }
      }

      // draw
      canvas.width = size.w * window.devicePixelRatio;
      canvas.height = size.h * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      // background
      ctx.clearRect(0, 0, size.w, size.h);
      ctx.fillStyle = "#061526";
      ctx.fillRect(0, 0, size.w, size.h);

      const { s, dx, dy } = scale;
      ctx.save();
      ctx.translate(dx, dy);
      ctx.scale(s, s);

      // tennis court lines
      ctx.fillStyle = "#0b2a1a";
      ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);

      ctx.strokeStyle = "rgba(255,255,255,0.22)";
      ctx.lineWidth = 2;
      ctx.strokeRect(14, 14, VIRTUAL_W - 28, VIRTUAL_H - 28);

      ctx.setLineDash([10, 12]);
      ctx.beginPath();
      ctx.moveTo(VIRTUAL_W / 2, 18);
      ctx.lineTo(VIRTUAL_W / 2, VIRTUAL_H - 18);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = "rgba(255,255,255,0.16)";
      ctx.beginPath();
      ctx.moveTo(14, VIRTUAL_H / 2);
      ctx.lineTo(VIRTUAL_W - 14, VIRTUAL_H / 2);
      ctx.stroke();

      // rackets
      const racket = g.racket;
      const drawRacket = (x, y, isRight) => {
        const w = racket.w;
        const h = racket.h;
        ctx.fillStyle = isRight ? "#8b5cf6" : "#60a5fa";
        ctx.fillRect(x - w / 2, y - h / 2, w, h);
        ctx.fillStyle = "rgba(0,0,0,0.25)";
        ctx.fillRect(x - w / 2, y - h / 2, w, 10);
      };
      drawRacket(g.left.x, g.left.y, false);
      drawRacket(g.right.x, g.right.y, true);

      // tennis ball
      const ball = g.ball;
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fillStyle = "#d9ff3f";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(ball.x - 2, ball.y, ball.r * 0.85, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(ball.x + 2, ball.y, ball.r * 0.85, Math.PI / 2, (3 * Math.PI) / 2);
      ctx.stroke();

      // scoreboard
      const left = score.left;
      const right = score.right;
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.font = "600 22px system-ui, -apple-system, Segoe UI, Roboto, Arial";
      ctx.textAlign = "center";
      ctx.fillText(`${left}  :  ${right}`, VIRTUAL_W / 2, 44);

      // win/paused overlay
      const hasWinner = left >= SCORE_TO_WIN || right >= SCORE_TO_WIN;
      if (paused || hasWinner) {
        ctx.fillStyle = "rgba(0,0,0,0.45)";
        ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);
        ctx.fillStyle = "rgba(255,255,255,0.95)";
        ctx.font = "700 34px system-ui, -apple-system, Segoe UI, Roboto, Arial";
        ctx.textAlign = "center";
        const msg = hasWinner
          ? left > right
            ? "Left wins!"
            : "Right wins!"
          : "Paused";
        ctx.fillText(msg, VIRTUAL_W / 2, VIRTUAL_H / 2 - 10);
        ctx.font = "500 16px system-ui, -apple-system, Segoe UI, Roboto, Arial";
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.fillText("Press Space to resume • Press R to reset", VIRTUAL_W / 2, VIRTUAL_H / 2 + 22);
      }

      ctx.restore();
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(rafRef.current);
      lastTsRef.current = 0;
    };
  }, [isOpen, mode, paused, score.left, score.right, scale, size]);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        width={size.w}
        height={size.h}
        className="block w-full h-auto"
      />
      <div className="px-3 py-2 text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-1 bg-black/20 border-t border-white/10">
        <span>
          <span className="text-gray-300">Single:</span> you (left) vs AI (right)
        </span>
        <span>
          <span className="text-gray-300">Two-player:</span> W/S and ↑/↓
        </span>
      </div>
    </div>
  );
}

