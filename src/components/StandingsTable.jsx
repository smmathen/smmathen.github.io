import React from "react";

const StandingsTable = ({ rows }) => {
  return (
    <div className="card-broadcast overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-broadcast-white/20 swiss-label">
              <th className="px-3 py-2 w-10 font-bold">#</th>
              <th className="px-3 py-2 font-bold">Team</th>
              <th className="px-3 py-2 hidden sm:table-cell font-bold">Role</th>
              <th className="px-3 py-2 font-bold">Season</th>
              <th className="px-3 py-2 w-10 text-center font-bold">Δ</th>
              <th className="px-3 py-2 font-bold">Links</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.rank}
                className="border-b border-broadcast-white/10 last:border-0 hover:bg-broadcast-white/[0.03] transition-colors"
              >
                <td className="px-3 py-2 tabular-nums text-broadcast-white font-bold text-sm">
                  {row.rank}
                </td>
                <td className="px-3 py-2 font-bold uppercase tracking-tight text-broadcast-white text-sm">
                  {row.team}
                </td>
                <td className="px-3 py-2 hidden sm:table-cell text-broadcast-slate text-xs">
                  {row.role}
                </td>
                <td className="px-3 py-2 tabular-nums text-broadcast-slate text-xs">
                  {row.season}
                </td>
                <td className="px-3 py-2 text-center text-sm">
                  {row.change === "up" && (
                    <span className="text-broadcast-white font-bold">▲</span>
                  )}
                  {row.change === "down" && (
                    <span className="text-broadcast-crimson font-bold">▼</span>
                  )}
                  {!row.change && (
                    <span className="text-broadcast-slate">—</span>
                  )}
                </td>
                <td className="px-3 py-2">
                  <div className="flex flex-wrap gap-1.5">
                    {row.links.map((link) => (
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
