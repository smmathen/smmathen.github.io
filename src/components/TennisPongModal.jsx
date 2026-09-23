import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import TennisPongGame from "./TennisPongGame";

export default function TennisPongModal({ isOpen, onClose }) {
  const titleId = useMemo(
    () => `tennis-pong-title-${Math.random().toString(36).slice(2)}`,
    []
  );
  const [mode, setMode] = useState("single");

  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId={titleId}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-broadcast-white/20">
        <div className="flex flex-col">
          <h2
            id={titleId}
            className="text-lg font-bold uppercase tracking-tight text-broadcast-white"
          >
            Tennis Pong
          </h2>
          <p className="text-xs text-broadcast-slate mt-1">
            Controls: Left racket W/S • Right racket ↑/↓ • Space pause • R reset
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="swiss-chip"
        >
          Close
        </button>
      </div>

      <div className="px-5 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="swiss-label mr-2">Mode</span>
          <button
            type="button"
            onClick={() => setMode("single")}
            className={
              mode === "single"
                ? "swiss-chip bg-broadcast-crimson text-broadcast-white"
                : "swiss-chip"
            }
          >
            Single (vs AI)
          </button>
          <button
            type="button"
            onClick={() => setMode("two")}
            className={
              mode === "two"
                ? "swiss-chip bg-broadcast-crimson text-broadcast-white"
                : "swiss-chip"
            }
          >
            Two-player
          </button>
        </div>

        <div className="overflow-hidden border border-broadcast-white/20 bg-black">
          <TennisPongGame isOpen={isOpen} mode={mode} />
        </div>
      </div>
    </Modal>
  );
}
