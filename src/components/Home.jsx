import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import LiveBadge from "./LiveBadge";

const Home = ({ onOpenTennis }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div name="home" className="w-full min-h-screen bg-broadcast-bg relative pt-[117px]">
      <div className="max-w-[1100px] mx-auto px-8 flex flex-col justify-center min-h-[calc(100vh-117px)] py-12">
        <div className="card-broadcast relative overflow-hidden p-8 md:p-12">
          <div className="absolute inset-0 glow-left pointer-events-none" />
          <div className="absolute inset-0 glow-right pointer-events-none" />

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8">
              <LiveBadge />
              <span className="font-mono tabular-nums text-broadcast-slate text-sm uppercase tracking-wider">
                Career · Season {currentYear}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-end mb-6">
              <div>
                <p className="font-headline text-sm uppercase tracking-widest text-broadcast-slate mb-1">
                  Developer
                </p>
                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-broadcast-white leading-none whitespace-nowrap">
                  Shawn Mathen
                </h1>
              </div>

              <div className="md:text-right">
                <p className="font-headline text-sm uppercase tracking-widest text-broadcast-slate mb-1">
                  Position
                </p>
                <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-broadcast-crimson leading-tight min-h-[2.5rem]">
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

            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 pb-8 border-b border-white/5">
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-xs uppercase tracking-widest text-broadcast-slate">
                  School
                </span>
                <span className="font-mono tabular-nums text-xl font-bold text-broadcast-white">
                  Texas A&M &apos;24
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-xs uppercase tracking-widest text-broadcast-slate">
                  Team
                </span>
                <span className="font-mono tabular-nums text-xl font-bold text-broadcast-white">
                  JPMC
                </span>
              </div>
            </div>

            <p className="text-prose w-full mb-8">
              Howdy folks! I am a software developer at JPMorganChase. I graduated
              from Texas A&M University in 2024 with a degree in computer science.
              I&apos;ve previously worked at USAA and IBM. I have interests in
              applying machine learning and artificial intelligence to solve
              real-world problems.
            </p>

            <div className="grid grid-cols-3 max-w-[150px] lg:hidden mb-6">
              <a
                href="https://www.linkedin.com/in/shawn-mathen/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="ion:logo-linkedin" color="#0072b1" width="40" height="40" />
              </a>
              <a href="https://github.com/smmathen" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:github-fill" color="#F0F0F5" width="40" height="40" />
              </a>
              <a
                href="https://drive.google.com/file/d/1PZ988tkTecSZ4yGP2pxlq88nSY54zKe_/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon icon="carbon:document" color="#F0F0F5" width="40" height="40" />
              </a>
            </div>

            <Link to="work" smooth={true} duration={500}>
              <button className="text-broadcast-white font-headline uppercase tracking-wider group border-2 border-broadcast-crimson px-8 py-3 flex items-center hover:bg-broadcast-crimson transition-colors">
                View Work
                <span className="group-hover:translate-x-1 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenTennis}
        aria-label="Open Tennis Pong"
        title="Tennis Pong"
        className="absolute bottom-6 right-6 opacity-40 hover:opacity-100 hover:text-broadcast-amber transition-all"
      >
        <Icon icon="mdi:tennis-ball" color="#F5A623" width="22" height="22" />
      </button>
    </div>
  );
};

export default Home;
