import React from "react";
import Avatar from "../assets/avatar.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#cf4f4f]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Howdy, my name is Shawn. Welcome to my page! Feel free to look
              around!
            </p>
            <div className="pl-">
              <img src={Avatar} alt="Apple's Avatar of me" style={{ width: "120px", height: "120px" }} />
            </div>
          </div>
          <div>
            <p>
              Over the past few years, I have developed a strong interest in
              creating meaningful software. I like to spend my free time
              learning new coding techniques, particiapting in hackathons, and
              creating my own small projects. However, outside of coding, you
              can catch me playing volleyball or acing my friends in Spikeball! If
              I'm not playing sports, I'm watching Jonathan Taylor be the best
              running back in NFL history, Tyrese Haliburton tear up NBA defenses, or cheering on the Fightin' Texas
              Aggies!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
