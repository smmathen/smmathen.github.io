import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaGoodreadsG } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinkClass =
    "text-broadcast-slate hover:text-broadcast-crimson transition-colors cursor-pointer";

  const socialRailItemClass =
    "group w-[160px] h-[50px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-broadcast-card border border-white/5 hover:border-broadcast-crimson/40";

  const socialLinkClass =
    "flex items-center w-full h-full pl-4 pr-3 text-broadcast-slate group-hover:text-broadcast-white transition-colors justify-end group-hover:justify-between";

  const socialLabelClass =
    "overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[140px] transition-[max-width] duration-300";

  return (
    <div className="fixed top-9 z-50 w-full h-[72px] flex justify-between items-center px-8 bg-broadcast-card border-b border-white/5 text-broadcast-slate">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            className="transform transition-all hover:scale-110 cursor-pointer"
            src={Logo}
            alt="Logo"
            style={{ width: "160px" }}
          />
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500} className={navLinkClass}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className={navLinkClass}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className={navLinkClass}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} className={navLinkClass}>
            Work
          </Link>
        </li>
      </ul>

      <div className="md:hidden flex items-center gap-3 z-10">
        <button type="button" onClick={handleClick} aria-label="Toggle menu">
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-broadcast-card flex flex-col justify-center items-center pt-20"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500} className={navLinkClass}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500} className={navLinkClass}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} className={navLinkClass}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500} className={navLinkClass}>
            Work
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[40%] left-0">
        <ul>
          <li className={socialRailItemClass}>
            <a
              className={socialLinkClass}
              href="https://www.linkedin.com/in/shawn-mathen/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={socialLabelClass}>LinkedIn</span>
              <FaLinkedin size={24} className="shrink-0" />
            </a>
          </li>
          <li className={socialRailItemClass}>
            <a
              className={socialLinkClass}
              href="https://github.com/smmathen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={socialLabelClass}>GitHub</span>
              <FaGithub size={24} className="shrink-0" />
            </a>
          </li>
          <li className="group w-[180px] h-[50px] flex items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-broadcast-card border border-white/5 hover:border-broadcast-crimson/40">
            <a
              className={socialLinkClass}
              href="https://www.goodreads.com/user/show/173531074-shawn-mathen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={`${socialLabelClass} group-hover:max-w-[160px]`}>Goodreads</span>
              <FaGoodreadsG size={24} className="shrink-0" />
            </a>
          </li>
          <li className={socialRailItemClass}>
            <a
              className={socialLinkClass}
              href="https://drive.google.com/file/d/1dp41kQIvg0yMUOGomF22Wo_00YnLs9iu/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={socialLabelClass}>Resume</span>
              <BsFillPersonLinesFill size={24} className="shrink-0" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
