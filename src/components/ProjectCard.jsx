import React from "react";

const ProjectCard = ({ title, description, season, links }) => {
  return (
    <article className="card-broadcast p-4 flex flex-col h-full">
      <span className="swiss-label tabular-nums mb-2">{season}</span>
      <h3 className="text-lg font-bold uppercase tracking-tight text-broadcast-white mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-[14px] leading-relaxed text-broadcast-body mb-4 flex-1">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 pt-3 border-t border-broadcast-white/20">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="swiss-chip"
          >
            {link.text}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
