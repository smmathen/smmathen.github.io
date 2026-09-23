import React from "react";

const SectionHeader = ({ title, tag, subtitle }) => {
  return (
    <div className="pb-5 border-b border-broadcast-white/20 mb-6">
      <div className="flex items-center gap-3 mb-2">
        {tag && <span className="swiss-tag">{tag}</span>}
      </div>
      <p className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-broadcast-white leading-none">
        <span className="border-b-2 border-broadcast-crimson pb-0.5">{title}</span>
      </p>
      {subtitle && (
        <p className="pt-3 text-[15px] leading-relaxed text-broadcast-body">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
