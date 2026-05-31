import React from "react";
import SectionHeader from "./SectionHeader";
import StoryCard from "./StoryCard";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-broadcast-bg text-broadcast-slate py-20">
      <div className="max-w-[1000px] mx-auto px-8">
        <SectionHeader
          title="Top Stories"
          tag="FEATURED"
          subtitle="The latest from the developer desk."
        />

        <div className="flex flex-col gap-6">
          <StoryCard
            featured
            tag="FEATURED"
            title="Howdy, my name is Shawn. Welcome to my page!"
            excerpt="Feel free to look around! Over the past few years, I have developed a strong interest in creating meaningful software. I like to spend my free time learning new coding techniques, participating in hackathons, and creating my own small projects."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <StoryCard
              tag="ANALYSIS"
              title="Why I love building software"
              excerpt="There's something about building software that actually does something useful that I really enjoy. Hackathons are a big part of that for me, but I also love tinkering on small projects whenever I get the chance."
            />
            <StoryCard
              tag="VIDEO"
              title="Off the clock: Sports & books"
              excerpt="However, outside of coding, you can catch me playing volleyball or dinking with my friends in Pickleball! If I'm not playing sports, I'm watching Jonathan Taylor be the best running back in NFL history, Tyrese Haliburton tear up NBA defenses, or supporting the Fightin' Texas Aggies! Also, I am always taking new book recommendations so feel free to let me know if you have any good ones!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
