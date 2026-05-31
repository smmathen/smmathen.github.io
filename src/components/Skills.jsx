import React from "react";
import Python from "../assets/python.png";
import CPP from "../assets/cpp.png";
import Java from "../assets/java.png";
import AWS from "../assets/aws.png";
import ReactImg from "../assets/react.webp";
import Dotnet from "../assets/dotnet.jpg";
import SkillCard from "./SkillCard";
import SectionHeader from "./SectionHeader";
import { skillStats } from "../data/broadcastData";

const skillImages = {
  python: Python,
  cpp: CPP,
  java: Java,
  aws: AWS,
  react: ReactImg,
  dotnet: Dotnet,
};

const Skills = () => {
  return (
    <div name="skills" className="w-full min-h-screen bg-broadcast-bg text-broadcast-slate py-20">
      <div className="max-w-[1000px] mx-auto px-8">
        <SectionHeader
          title="The Roster"
          tag="SEASON"
          subtitle="Technologies on the active lineup — jersey, position, and tenure."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skillStats.map((skill) => (
            <SkillCard
              key={skill.skillName}
              imgSrc={skillImages[skill.imgKey]}
              altText={`${skill.skillName} icon`}
              skillName={skill.skillName}
              position={skill.position}
              role={skill.role}
              jersey={skill.jersey}
              seasons={skill.seasons}
              featured={skill.featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
