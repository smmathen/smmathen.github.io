import React from "react";

const SkillCard = ({
  imgSrc,
  altText,
  skillName,
  position,
  role,
  jersey,
  seasons,
  featured,
}) => {
  return (
    <div
      className={`card-broadcast p-4 flex flex-col h-full ${
        featured ? "border-broadcast-crimson" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`tabular-nums text-2xl font-bold leading-none ${
            featured ? "text-broadcast-crimson" : "text-broadcast-white"
          }`}
        >
          #{String(jersey).padStart(2, "0")}
        </span>
        {featured && <span className="swiss-tag">Capt</span>}
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div className="h-9 w-9 border border-broadcast-white/20 flex items-center justify-center flex-shrink-0 p-1">
          <img className="h-full w-full object-contain" src={imgSrc} alt={altText} />
        </div>
        <div className="text-left min-w-0">
          <p className="text-lg font-bold uppercase tracking-tight text-broadcast-white truncate leading-tight">
            {skillName}
          </p>
          <p className="swiss-label mt-0.5">{role}</p>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2 pt-3 border-t border-broadcast-white/20">
        <div>
          <p className="swiss-label mb-0.5">Pos</p>
          <p className="tabular-nums text-sm font-bold text-broadcast-white">{position}</p>
        </div>
        <div className="text-right">
          <p className="swiss-label mb-0.5">Seasons</p>
          <p className="tabular-nums text-sm font-bold text-broadcast-white">{seasons}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
