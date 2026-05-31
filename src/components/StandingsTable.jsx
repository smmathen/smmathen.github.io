import React from "react";

const StandingsTable = ({ rows }) => {
  return (
    <div className="card-broadcast overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 text-xs font-headline uppercase tracking-wider text-broadcast-slate">
              <th className="px-4 py-3 w-12">#</th>
              <th className="px-4 py-3">Team</th>
              <th className="px-4 py-3 hidden sm:table-cell">Role</th>
              <th className="px-4 py-3 font-mono">Season</th>
              <th className="px-4 py-3 w-12 text-center">Δ</th>
              <th className="px-4 py-3">Links</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.rank}
                className="even:bg-white/[0.02] border-b border-white/5 last:border-0 hover:bg-white/[0.04] transition-colors"
              >
                <td className="px-4 py-3 font-mono tabular-nums text-broadcast-white font-bold">
                  {row.rank}
                </td>
                <td className="px-4 py-3 font-headline font-semibold uppercase tracking-tight text-broadcast-white">
                  {row.team}
                </td>
                <td className="px-4 py-3 hidden sm:table-cell text-broadcast-slate text-sm">
                  {row.role}
                </td>
                <td className="px-4 py-3 font-mono tabular-nums text-broadcast-slate text-sm">
                  {row.season}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.change === "up" && (
                    <span className="text-emerald-400 font-bold">▲</span>
                  )}
                  {row.change === "down" && (
                    <span className="text-broadcast-crimson font-bold">▼</span>
                  )}
                  {!row.change && (
                    <span className="text-broadcast-slate">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    {row.links.map((link) => (
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StandingsTable;
