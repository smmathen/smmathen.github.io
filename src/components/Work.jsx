import React from "react";
import IBM from "../assets/ibm.png";
import USAA from "../assets/usaa.jpeg";
import SecretSuperstar from "../assets/secretsuperstar.jpg";
import AeroCheck from "../assets/aerocheck.jpg";
import ReelDeal from "../assets/reeldeal.png"
import JPMC from "../assets/jpmc.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto pt-28 flex flex-col justify center w-full h-full pl-8 pr-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#cf4f4f]   ">
            Work
          </p>
          <p className="py-4"> &lt; Check out some of my recent work! /&gt;</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${JPMC})` }}
            className="shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="p-4 text-center">
                <span className="text-xl font-bold text-white tracking-wider">
                  Software Engineer I
                </span>
                <div className="pt-8">
                  <a
                    href="https://www.usaajobs.com/about-usaa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Department Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${USAA})` }}
            className="shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="p-4 text-center">
                <span className="text-xl font-bold text-white tracking-wider">
                  Summer Internship 2023
                </span>
                <div className="pt-8">
                  <a
                    href="https://www.usaajobs.com/about-usaa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Department Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${IBM})` }}
            className="shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="p-4 text-center">
                <span className="text-xl font-bold text-white tracking-wider">
                  Summer Internship/Fall Co-Op 2022
                </span>
                <div className="pt-8">
                  <a
                    href="https://www.ibm.com/security"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Department Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ReelDeal})` }}
            className="shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="p-4 text-center">
                <span className="text-xl font-bold text-white tracking-wider">
                  ReelDeal
                </span>
                <div className="pt-4 pb-2 text-center">
                  <a
                    href="https://reel-deal.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/smmathen/reel-deal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SecretSuperstar})` }}
            className="shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="flex flex-col justify-center h-full">
                <span className="text-center text-xl font-bold text-white tracking-wider">
                  Hackathon Submission for HowdyHack 2022
                </span>
                <div className="pt-4 pb-2 text-center">
                  <a
                    href="https://devpost.com/software/secret-superstar-gsm9wj"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Devpost
                    </button>
                  </a>
                  <a
                    href="https://github.com/smmathen/secret-superstar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${AeroCheck})` }}
            className="shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="flex flex-col justify-center h-full">
                <span className="text-center text-xl font-bold text-white tracking-wider">
                  Hackathon Submission for TAMUHack 2021 // Nominated Honorable Mention
                </span>
                <div className="pt-4 pb-2 text-center">
                  <a
                    href="https://devpost.com/software/aerocheck"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Devpost
                    </button>
                  </a>
                  <a
                    href="https://github.com/smmathen/TAMUHack_2021"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
