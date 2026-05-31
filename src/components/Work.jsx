import React from "react";
import AeroCheck from "../assets/aerocheck.jpg";
import WorkCard from "./WorkCard";
import SectionHeader from "./SectionHeader";
import StandingsTable from "./StandingsTable";
import { careerStandings, projects } from "../data/broadcastData";

const Work = () => {
  const featured = projects.find((p) => p.featured);
  const projectRows = projects.map((project, index) => ({
    rank: index + 1,
    team: project.title,
    role: project.description,
    season: project.season,
    change: null,
    links: project.links,
  }));

  return (
    <div name="work" className="w-full min-h-screen bg-broadcast-bg text-broadcast-slate py-20">
      <div className="max-w-[1000px] mx-auto px-8">
        <SectionHeader
          title="Career Standings"
          tag="LEAGUE"
          subtitle="Experience table — ranked by most recent season."
        />

        <StandingsTable rows={careerStandings} />

        <div className="mt-10">
          <p className="font-headline text-xs uppercase tracking-widest text-broadcast-slate mb-3">
            Projects
          </p>
          <StandingsTable rows={projectRows} />
        </div>

        {featured && (
          <div className="mt-10">
            <WorkCard
              featured
              backgroundImage={AeroCheck}
              title={featured.title}
              description={featured.description}
              links={featured.links}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
