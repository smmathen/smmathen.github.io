import React from "react";
import Python from "../assets/python.png";
import CPP from "../assets/cpp.png";
import Java from "../assets/java.png";
import AWS from "../assets/aws.png";
import ReactImg from "../assets/react.webp";
import Dotnet from "../assets/dotnet.jpg"
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillsData = [
    { imgSrc: Python, altText: "Python icon", skillName: "Python" },
    { imgSrc: CPP, altText: "C Plus Plus icon", skillName: "C++" },
    { imgSrc: Java, altText: "Java icon", skillName: "Java" },
    { imgSrc: AWS, altText: "AWS icon", skillName: "AWS" },
    { imgSrc: ReactImg, altText: "React icon", skillName: "React" },
    { imgSrc: Dotnet, altText: ".NET icon", skillName: ".NET" }
  ];
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#cf4f4f]">
            Skills
          </p>
          <p className="py-4">
            &lt; Here is some cool tech I have worked with! /&gt;
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 pr-8">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              imgSrc={skill.imgSrc}
              altText={skill.altText}
              skillName={skill.skillName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
