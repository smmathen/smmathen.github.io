import React from "react";
import { Icon } from "@iconify/react";

const tagStyles = {
  FEATURED: {
    border: "border-l-broadcast-amber",
    pill: "bg-broadcast-amber/15 text-broadcast-amber border-broadcast-amber/30",
    icon: "mdi:star-shooting",
    iconColor: "#F5A623",
  },
  ANALYSIS: {
    border: "border-l-broadcast-crimson",
    pill: "bg-broadcast-crimson/15 text-broadcast-crimson border-broadcast-crimson/30",
    icon: "mdi:chart-timeline-variant",
    iconColor: "#E8192C",
  },
  VIDEO: {
    border: "border-l-white/30",
    pill: "bg-white/5 text-broadcast-slate border-white/10",
    icon: "mdi:play-circle-outline",
    iconColor: "#8A8A99",
  },
};

const StoryCard = ({ tag, title, excerpt, featured = false }) => {
  const styles = tagStyles[tag] || tagStyles.ANALYSIS;

  return (
    <article
      className={`card-broadcast flex flex-col h-full border-l-4 ${styles.border} p-5 ${
        featured ? "md:p-6" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        {tag && (
          <span
            className={`inline-block px-2 py-0.5 text-xs font-headline font-bold uppercase tracking-wider rounded border ${styles.pill}`}
          >
            {tag}
          </span>
        )}
        <Icon
          icon={styles.icon}
          color={styles.iconColor}
          width={featured ? "28" : "22"}
          height={featured ? "28" : "22"}
          className="flex-shrink-0 opacity-80"
        />
      </div>
      <h3
        className={`font-headline font-bold uppercase tracking-tight text-broadcast-white mb-2 ${
          featured ? "text-2xl" : "text-lg"
        }`}
      >
        {title}
      </h3>
      <p className="text-prose flex-grow">{excerpt}</p>
    </article>
  );
};

export default StoryCard;
