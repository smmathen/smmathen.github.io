import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#cf4f4f]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Shawn Mathen
          {/* <Typed strings={["Shawn Mathen :)"]} typeSpeed={150} /> */}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#6382d1]">
          <TypeAnimation
            sequence={[
              'I am a software engineer!',
              3000,
              'I am a pickleballer!',
              3000,
              'I am an Aggie!',
              3000
            ]}
            speed={30}
            repeat={Infinity}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Howdy folks! I am a software developer at JPMorganChase. I graduated from Texas A&M University in 2024 with a degree in computer science. I've previously worked
          at USAA and IBM. I have interests in applying machine learning and artificial intelligence to solve real-world problems.
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
