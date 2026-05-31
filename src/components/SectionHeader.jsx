import React from "react";

const SectionHeader = ({ title, tag, subtitle }) => {
  return (
    <div className="pb-8">
      <div className="flex items-center gap-3 mb-2">
        {tag && (
          <span className="px-2 py-0.5 text-xs font-headline font-bold uppercase tracking-wider bg-broadcast-amber/15 text-broadcast-amber border border-broadcast-amber/30 rounded">
            {tag}
          </span>
        )}
      </div>
      <p className="text-4xl font-headline font-bold uppercase tracking-tight text-broadcast-white inline border-b-4 border-broadcast-crimson">
        {title}
      </p>
      {subtitle && <p className="py-4 text-prose">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
