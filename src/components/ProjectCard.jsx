import React from "react";

const ProjectCard = ({ title, description, season, links }) => {
  return (
    <article className="card-broadcast p-4 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono tabular-nums text-sm font-bold text-broadcast-slate">
          {season}
        </span>
      </div>

      <h3 className="font-headline text-lg font-bold uppercase tracking-tight text-broadcast-white mb-2">
        {title}
      </h3>
      <p className="text-prose text-sm mb-4 flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="px-2 py-0.5 text-xs font-headline uppercase tracking-wide text-broadcast-crimson border border-broadcast-crimson/30 rounded hover:bg-broadcast-crimson/10 transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
