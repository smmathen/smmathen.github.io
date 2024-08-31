import React from "react";
import Python from "../assets/python.png";
import CPP from "../assets/cpp.png";
import Java from "../assets/java.png";
import Postman from "../assets/postman.png";
import Figma from "../assets/figma.svg";
import ReactImg from "../assets/react.webp";

const Skills = () => {
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
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CPP} alt="C Plus Plus icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Figma} alt="Figma icon" />
            <p className="my-4">Figma</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Postman} alt="Postman icon" />
            <p className="my-4">Postman</p>
          </div>
          <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
