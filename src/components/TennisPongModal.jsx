import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import TennisPongGame from "./TennisPongGame";

export default function TennisPongModal({ isOpen, onClose }) {
  const titleId = useMemo(
    () => `tennis-pong-title-${Math.random().toString(36).slice(2)}`,
    []
  );
  const [mode, setMode] = useState("single"); // 'single' | 'two'

  return (
    <Modal isOpen={isOpen} onClose={onClose} titleId={titleId}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex flex-col">
          <h2 id={titleId} className="text-lg font-semibold tracking-wide">
            Tennis Pong
          </h2>
          <p className="text-xs text-gray-400">
            Controls: Left racket W/S • Right racket ↑/↓ • Space pause • R reset
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 transition-colors"
        >
          Close
        </button>
      </div>

      <div className="px-5 py-4">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm text-gray-300 mr-2">Mode</span>
          <button
            type="button"
            onClick={() => setMode("single")}
            className={
              mode === "single"
                ? "px-3 py-1.5 rounded-full bg-[#cf4f4f] text-white"
                : "px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
            }
          >
            Single (vs AI)
          </button>
          <button
            type="button"
            onClick={() => setMode("two")}
            className={
              mode === "two"
                ? "px-3 py-1.5 rounded-full bg-[#cf4f4f] text-white"
                : "px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition-colors"
            }
          >
            Two-player
          </button>
        </div>

        <div className="rounded-lg overflow-hidden border border-white/10 bg-black/20">
          <TennisPongGame isOpen={isOpen} mode={mode} />
        </div>
      </div>
    </Modal>
  );
}

