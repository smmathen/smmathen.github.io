import React from "react";
import Python from "../assets/python.png";
import CPP from "../assets/cpp.png";
import Java from "../assets/java.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div>
        <div>
          <p>Experience</p>
          <p>Here is some cool tech I have worked with!</p>
        </div>

        <div>
          <div>
            <img src={Python} alt="Python icon" />
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
