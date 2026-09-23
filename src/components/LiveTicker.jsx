import React from "react";
import { tickerItems } from "../data/broadcastData";

const indianaTeams = new Set(["IND", "A&M", "PUR"]);

const TickerItem = ({ item }) => {
  const awayWon = item.awayScore > item.homeScore;
  const homeWon = item.homeScore > item.awayScore;

  return (
    <span className="inline-flex items-center gap-3 px-6 whitespace-nowrap">
      <span
        className={`tabular-nums font-bold ${
          awayWon && indianaTeams.has(item.away)
            ? "text-broadcast-crimson"
            : "text-broadcast-white"
        }`}
      >
        {item.away} {item.awayScore}
      </span>
      <span className="text-broadcast-slate">–</span>
      <span
        className={`tabular-nums font-bold ${
          homeWon && indianaTeams.has(item.home)
            ? "text-broadcast-crimson"
            : "text-broadcast-white"
        }`}
      >
        {item.homeScore} {item.home}
      </span>
      <span className="swiss-label">{item.period}</span>
    </span>
  );
};

const LiveTicker = () => {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-9 bg-broadcast-bg border-b border-broadcast-white/20 overflow-hidden flex items-center">
      <div className="flex-shrink-0 px-4 h-full flex items-center border-r border-broadcast-white/20">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-broadcast-crimson">
          Scores
        </span>
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="ticker-track">
          {items.map((item, index) => (
            <TickerItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;
