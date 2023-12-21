import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import Typed from "react-typed";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#cf4f4f]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          <Typed strings={["Shawn Mathen :)"]} typeSpeed={150} />
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#6382d1]">
          I am a software developer
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Howdy everyone! I am currently a senior computer science student at Texas A&M University (A-Whoop!) navigating
          the world of software development. This past summer, I was a Software Engineering Intern at USAA, and I have previously intered at IBM as well.
          Outside of this, I have a strong interest in machine learning, artificial intelligence,
          and data science, so I am minoring in Statistics to help me
          explore these different fields. However, I am always looking to learn new technologies to develop new things!
          I am also an active member of the Society of Asian Scientists and Engineers and also Epic at TAMU!
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
            // TODO: Update resume link to current resume (make it online-friendly)
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
      </div>
    </div>
  );
};

export default Home;
