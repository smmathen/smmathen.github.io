import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import SelfImage from "../assets/selfimage.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] pt-20">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#cf4f4f]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Shawn Mathen
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a software developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a computer science student at Texas A&M University seeking out
          the world of software development. Currently, I am interning at IBM as
          a Software Developer in their Chief Information Security Office. I
          have a strong interest in machine learning, artificial intelligence,
          and data science, and I plan on minoring in Statistics to help me
          explore these possibilities.
        </p>
        <div className="grid grid-cols-3 max-w-[150px] lg:hidden">
          <a
            href="https://www.linkedin.com/in/shawn-mathen/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon="ion:logo-linkedin"
              color="#0072b1"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://github.com/smmathen"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon="akar-icons:github-fill"
              color="#FFFFFF"
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1PZ988tkTecSZ4yGP2pxlq88nSY54zKe_/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon
              icon="carbon:document"
              color="#FFFFFF"
              width="40"
              height="40"
            />
          </a>
        </div>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-8 py-3 my-2 flex items-center hover:bg-[#cf4f4f] hover:border-[#cf4f4f]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center w-full">
          <img src={SelfImage} alt="Me" height="250" width="250"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
