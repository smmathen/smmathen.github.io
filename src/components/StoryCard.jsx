import React from "react";
import { Icon } from "@iconify/react";

const tagStyles = {
  FEATURED: {
    border: "border-l-broadcast-amber",
    icon: "mdi:star-shooting",
  },
  ANALYSIS: {
    border: "border-l-broadcast-crimson",
    icon: "mdi:chart-timeline-variant",
  },
  VIDEO: {
    border: "border-l-broadcast-slate",
    icon: "mdi:play-circle-outline",
  },
};

const StoryCard = ({ tag, title, excerpt, featured = false }) => {
  const styles = tagStyles[tag] || tagStyles.ANALYSIS;

  return (
    <article
      className={`card-broadcast flex flex-col h-full border-l-2 ${styles.border} p-5`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        {tag && <span className="swiss-tag">{tag}</span>}
        <Icon
          icon={styles.icon}
          color="#9A9188"
          width={featured ? "22" : "18"}
          height={featured ? "22" : "18"}
          className="flex-shrink-0"
        />
      </div>
      <h3
        className={`font-bold uppercase tracking-tight text-broadcast-white mb-2 leading-tight ${
          featured ? "text-xl md:text-2xl" : "text-lg"
        }`}
      >
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-broadcast-body flex-grow">
        {excerpt}
      </p>
    </article>
  );
};

export default StoryCard;
