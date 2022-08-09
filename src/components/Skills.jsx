import React from "react";
import Python from "../assets/python.png";
import CPP from "../assets/cpp.png";
import Java from "../assets/java.png";
import Postman from "../assets/postman.png";
import Elasticsearch from "../assets/elasticsearch.svg";
import Figma from "../assets/figma.png";
import Kibana from "../assets/kibana.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#cf4f4f]">
            Experience
          </p>
          <p className="py-4">Here is some cool tech I have worked with!</p>
        </div>

        <div>
          <div>
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p>Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
