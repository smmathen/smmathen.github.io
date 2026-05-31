import React from "react";

const LiveBadge = ({ className = "" }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 bg-broadcast-crimson/15 border border-broadcast-crimson/40 rounded text-broadcast-crimson text-xs font-headline font-bold uppercase tracking-wider ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-broadcast-crimson animate-pulse-live" />
      Live
    </span>
  );
};

export default LiveBadge;
