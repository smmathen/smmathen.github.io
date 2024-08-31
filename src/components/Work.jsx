import React from "react";
import IBM from "../assets/ibm.png";
import USAA from "../assets/usaa.jpeg";
import SecretSuperstar from "../assets/secretsuperstar.jpg";
import AeroCheck from "../assets/aerocheck.jpg";
import ReelDeal from "../assets/reeldeal.png"
import JPMC from "../assets/jpmc.png"
import WorkCard from "./WorkCard";

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
          <WorkCard backgroundImage={JPMC} description="Software Engineer I" links={[{ url: "https://www.jpmorganchase.com/", text: "Company Website" }]} />
          <WorkCard backgroundImage={USAA} description="Summer Internship 2023" links={[{ url: "https://www.usaa.com/", text: "Company Website" }]} />
          <WorkCard backgroundImage={IBM} description="Summer Internship 2022" links={[{ url: "https://www.ibm.com/", text: "Company Website" }]} />
          <WorkCard backgroundImage={ReelDeal} description="ReelDeal" links={[{ url: "https://reel-deal.vercel.app", text: "Site" }, { url: "https://github.com/smmathen/reel-deal", text: "Code" }]} />
          <WorkCard backgroundImage={SecretSuperstar} description="Hackathon Submission for HowdyHack 2022" links={[{ url: "https://devpost.com/software/secret-superstar-gsm9wj", text: "Devpost" }, { url: "https://github.com/smmathen/secret-superstar", text: "Code" }]} />
          <WorkCard backgroundImage={AeroCheck} description="Hackathon Submission for TAMUHack 2021 // Nominated Honorable Mention" links={[{ url: "https://devpost.com/software/aerocheck", text: "Devpost" }, { url: "https://github.com/smmathen/TAMUHack_2021", text: "Code" }]} />
        </div>
      </div>
    </div>
  );
};

export default Work;
