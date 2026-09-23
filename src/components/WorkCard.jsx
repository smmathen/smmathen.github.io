import React from "react";

const WorkCard = ({
  backgroundImage,
  title,
  description,
  links,
  featured = false,
}) => {
  if (featured) {
    return (
      <article className="card-broadcast overflow-hidden">
        <div className="px-4 py-2.5 border-b border-broadcast-white/20 flex items-center gap-3">
          <span className="swiss-tag">Featured</span>
          <span className="swiss-label">Project Spotlight</span>
        </div>

        <div className="grid md:grid-cols-2">
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="min-h-[160px] md:min-h-[200px] bg-cover bg-center border-b md:border-b-0 md:border-r border-broadcast-white/20"
          />
          <div className="p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-broadcast-white mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-[14px] leading-snug text-broadcast-body mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="swiss-btn !py-2 !px-4 text-xs">{link.text}</button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="card-broadcast group flex justify-center items-center mx-auto content-div overflow-hidden"
    >
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <div className="p-4 text-center">
          <span className="text-xl font-bold uppercase tracking-tight text-broadcast-white">
            {description}
          </span>
          {links.length === 1 && (
            <div className="pt-8">
              <a href={links[0].url} target="_blank" rel="noreferrer">
                <button className="swiss-btn m-2">{links[0].text}</button>
              </a>
            </div>
          )}
          {links.length === 2 && (
            <div className="pt-4 pb-2 text-center flex justify-center flex-wrap">
              {links.map((link) => (
                <a key={link.text} href={link.url} target="_blank" rel="noreferrer">
                  <button className="swiss-btn m-2">{link.text}</button>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
