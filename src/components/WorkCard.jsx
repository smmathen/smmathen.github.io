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
        <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
          <span className="px-2 py-0.5 text-xs font-headline font-bold uppercase tracking-wider bg-broadcast-amber/15 text-broadcast-amber border border-broadcast-amber/30 rounded">
            Featured
          </span>
          <span className="font-headline text-sm uppercase tracking-widest text-broadcast-slate">
            Project Spotlight
          </span>
        </div>

        <div className="grid md:grid-cols-2">
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="min-h-[220px] md:min-h-[280px] bg-cover bg-center border-b md:border-b-0 md:border-r border-white/5"
          />
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tight text-broadcast-white mb-2">
              {title}
            </h3>
            <p className="text-prose mb-6">{description}</p>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="rounded px-6 py-2 bg-broadcast-bg border border-broadcast-crimson text-broadcast-white font-headline uppercase tracking-wider text-sm hover:bg-broadcast-crimson transition-colors">
                    {link.text}
                  </button>
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
      className="card-broadcast group rounded-lg flex justify-center items-center mx-auto content-div overflow-hidden border-white/10 hover:border-broadcast-crimson/40"
    >
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-4 text-center">
          <span className="font-headline text-xl uppercase tracking-tight text-broadcast-white">
            {description}
          </span>
          {links.length === 1 && (
            <div className="pt-8">
              <a href={links[0].url} target="_blank" rel="noreferrer">
                <button className="text-center rounded px-8 py-3 m-2 bg-broadcast-bg border border-broadcast-crimson text-broadcast-white font-headline uppercase tracking-wider text-sm hover:bg-broadcast-crimson transition-colors">
                  {links[0].text}
                </button>
              </a>
            </div>
          )}
          {links.length === 2 && (
            <div className="pt-4 pb-2 text-center flex justify-center flex-wrap">
              {links.map((link) => (
                <a key={link.text} href={link.url} target="_blank" rel="noreferrer">
                  <button className="text-center rounded px-6 py-2 m-2 bg-broadcast-bg border border-broadcast-crimson text-broadcast-white font-headline uppercase tracking-wider text-sm hover:bg-broadcast-crimson transition-colors">
                    {link.text}
                  </button>
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
