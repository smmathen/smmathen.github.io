import React from "react";
import SectionHeader from "./SectionHeader";
import StoryCard from "./StoryCard";

const About = () => {
  return (
    <div name="about" className="w-full text-broadcast-slate py-16 md:py-20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <SectionHeader
          title="Top Stories"
          tag="FEATURED"
          subtitle="The latest from the developer desk."
        />

        <div className="flex flex-col gap-4">
          <StoryCard
            featured
            tag="FEATURED"
            title="Howdy, my name is Shawn. Welcome to my page!"
            excerpt="Feel free to look around! Over the past few years, I have developed a strong interest in creating meaningful software. I like to spend my free time learning new coding techniques, participating in hackathons, and creating my own small projects."
          />

          <div className="grid md:grid-cols-2 gap-4">
            <StoryCard
              tag="ANALYSIS"
              title="Why I love building software"
              excerpt="There's something about building software that actually does something useful that I really enjoy. Hackathons are a big part of that for me, but I also love tinkering on small projects whenever I get the chance."
            />
            <StoryCard
              tag="VIDEO"
              title="Off the clock: Sports & books"
              excerpt="Outside of coding, you can catch me playing volleyball or pickleball. If I'm not playing, I'm watching Jonathan Taylor, Tyrese Haliburton, or the Fightin' Texas Aggies — always open to book recommendations too!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
