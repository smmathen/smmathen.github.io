import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import SelfImage from "../assets/selfimage.png";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
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
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#cf4f4f] hover:border-[#cf4f4f]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          {/* <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12 px-4">
              <img
                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                src={SelfImage}
                alt="Myself"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
