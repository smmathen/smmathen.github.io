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
        featured ? "border-broadcast-amber/30 ring-1 ring-broadcast-amber/20" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`font-mono tabular-nums text-2xl font-bold leading-none ${
            featured ? "text-broadcast-amber" : "text-broadcast-white"
          }`}
        >
          #{String(jersey).padStart(2, "0")}
        </span>
        {featured && (
          <span className="px-2 py-0.5 text-[10px] font-headline font-bold uppercase tracking-wider bg-broadcast-amber/15 text-broadcast-amber border border-broadcast-amber/30 rounded">
            Capt
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <img className="h-10 w-10 object-contain flex-shrink-0" src={imgSrc} alt={altText} />
        <div className="text-left min-w-0">
          <p className="font-headline text-lg font-bold uppercase tracking-tight text-broadcast-white truncate">
            {skillName}
          </p>
          <p className="text-xs text-broadcast-slate uppercase tracking-wider">{role}</p>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2 pt-3 border-t border-white/5">
        <div>
          <p className="font-headline text-[10px] uppercase tracking-widest text-broadcast-slate mb-0.5">
            Pos
          </p>
          <p className="font-mono tabular-nums text-sm font-bold text-broadcast-white">
            {position}
          </p>
        </div>
        <div className="text-right">
          <p className="font-headline text-[10px] uppercase tracking-widest text-broadcast-slate mb-0.5">
            Seasons
          </p>
          <p className="font-mono tabular-nums text-sm font-bold text-broadcast-white">
            {seasons}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
