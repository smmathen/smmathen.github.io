import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import LiveBadge from "./LiveBadge";
import { SCROLL_OFFSET } from "../constants/scroll";

const Home = ({ onOpenTennis }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div name="home" className="w-full h-screen relative pt-9 flex flex-col">
      <div className="flex-1 min-h-0 flex items-center max-w-[1100px] w-full mx-auto px-6 md:px-8 pt-[4.25rem] pb-6">
        <div className="card-broadcast relative w-full p-6 md:p-8">
          <div className="flex justify-between items-center mb-5">
            <LiveBadge />
            <span className="swiss-label tabular-nums">
              Career / Season {currentYear}
            </span>
          </div>

          <div className="grid md:grid-cols-12 gap-5 md:gap-8 mb-5 items-end">
            <div className="md:col-span-7">
              <p className="swiss-label mb-1.5">Developer</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-broadcast-white leading-none whitespace-nowrap">
                Shawn Mathen
              </h1>
            </div>

            <div className="md:col-span-5 md:border-l border-broadcast-white/20 md:pl-6">
              <p className="swiss-label mb-1.5">Position</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-broadcast-crimson leading-tight min-h-[2rem]">
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    3000,
                    "Pickleballer",
                    3000,
                    "Aggie",
                    3000,
                  ]}
                  speed={30}
                  repeat={Infinity}
                />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-5 py-4 border-y border-broadcast-white/20">
            <div>
              <p className="swiss-label mb-1">School</p>
              <p className="text-lg md:text-xl font-bold uppercase tracking-tight text-broadcast-white tabular-nums">
                Texas A&M &apos;24
              </p>
            </div>
            <div>
              <p className="swiss-label mb-1">Team</p>
              <p className="text-lg md:text-xl font-bold uppercase tracking-tight text-broadcast-white">
                JPMC
              </p>
            </div>
          </div>

          <p className="text-[15px] md:text-base leading-relaxed text-broadcast-body mb-6 max-w-3xl">
            Howdy folks! I am a software developer at JPMorganChase. I graduated
            from Texas A&M University in 2024 with a degree in computer science.
            I&apos;ve previously worked at USAA and IBM. I have interests in
            applying machine learning and artificial intelligence to solve
            real-world problems.
          </p>

          <div className="grid grid-cols-3 max-w-[130px] lg:hidden mb-4">
            <a
              href="https://www.linkedin.com/in/shawn-mathen/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="ion:logo-linkedin" color="#9A9188" width="28" height="28" />
            </a>
            <a href="https://github.com/smmathen" target="_blank" rel="noreferrer">
              <Icon icon="akar-icons:github-fill" color="#F0EBE3" width="28" height="28" />
            </a>
            <a
              href="https://drive.google.com/file/d/1PZ988tkTecSZ4yGP2pxlq88nSY54zKe_/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon icon="carbon:document" color="#F0EBE3" width="28" height="28" />
            </a>
          </div>

          <Link to="work" smooth={true} duration={500} offset={SCROLL_OFFSET}>
            <button className="swiss-btn group">
              View Work
              <span className="group-hover:translate-x-1 duration-150">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenTennis}
        aria-label="Open Tennis Pong"
        title="Tennis Pong"
        className="absolute bottom-5 right-5 w-9 h-9 border border-broadcast-white/20 flex items-center justify-center opacity-50 hover:opacity-100 hover:border-broadcast-amber transition-all"
      >
        <Icon icon="mdi:tennis-ball" color="#B8956A" width="16" height="16" />
      </button>
    </div>
  );
};

export default Home;
