import React from "react";

const LiveBadge = ({ className = "" }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-broadcast-crimson ${className}`}
    >
      <span className="w-1.5 h-1.5 bg-broadcast-crimson animate-pulse-live" />
      Live
    </span>
  );
};

export default LiveBadge;
