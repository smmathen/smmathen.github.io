import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaGoodreadsG } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { SCROLL_OFFSET } from "../constants/scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinkClass =
    "text-[12px] font-bold uppercase tracking-[0.16em] text-broadcast-slate hover:text-broadcast-crimson transition-colors cursor-pointer";

  const socialRailItemClass =
    "group w-[160px] h-[48px] flex items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-broadcast-bg border border-l-0 border-broadcast-white/20 hover:border-broadcast-crimson hover:text-broadcast-crimson";

  const socialLinkClass =
    "flex items-center w-full h-full pl-4 pr-3 text-broadcast-slate group-hover:text-broadcast-crimson transition-colors justify-end group-hover:justify-between";

  const socialLabelClass =
    "overflow-hidden whitespace-nowrap max-w-0 group-hover:max-w-[140px] transition-[max-width] duration-200 text-[11px] font-bold uppercase tracking-[0.12em]";

  const scrollProps = { smooth: true, duration: 500, offset: SCROLL_OFFSET };

  return (
    <div className="fixed top-9 z-50 w-full h-14 flex justify-between items-center px-6 md:px-8 bg-broadcast-bg border-b border-broadcast-white/20 text-broadcast-slate">
      <div>
        <Link to="home" {...scrollProps}>
          <img
            className="cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
            src={Logo}
            alt="Logo"
            style={{ width: "130px" }}
          />
        </Link>
      </div>

      <ul className="hidden md:flex items-center">
        <li>
          <Link to="home" {...scrollProps} className={navLinkClass}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" {...scrollProps} className={navLinkClass}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" {...scrollProps} className={navLinkClass}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" {...scrollProps} className={navLinkClass}>
            Work
          </Link>
        </li>
      </ul>

      <div className="md:hidden flex items-center gap-3 z-50">
        <button type="button" onClick={handleClick} aria-label="Toggle menu">
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "fixed inset-0 z-40 bg-broadcast-bg flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" {...scrollProps} className={navLinkClass}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="about" {...scrollProps} className={navLinkClass}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="skills" {...scrollProps} className={navLinkClass}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="work" {...scrollProps} className={navLinkClass}>
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
              <FaLinkedin size={20} className="shrink-0" />
            </a>
          </li>
          <li className={`${socialRailItemClass} -mt-px`}>
            <a
              className={socialLinkClass}
              href="https://github.com/smmathen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={socialLabelClass}>GitHub</span>
              <FaGithub size={20} className="shrink-0" />
            </a>
          </li>
          <li className="group w-[180px] h-[48px] flex items-center ml-[-120px] hover:ml-[-10px] duration-200 bg-broadcast-bg border border-l-0 border-broadcast-white/20 hover:border-broadcast-crimson -mt-px">
            <a
              className={socialLinkClass}
              href="https://www.goodreads.com/user/show/173531074-shawn-mathen"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={`${socialLabelClass} group-hover:max-w-[160px]`}>Goodreads</span>
              <FaGoodreadsG size={20} className="shrink-0" />
            </a>
          </li>
          <li className={`${socialRailItemClass} -mt-px`}>
            <a
              className={socialLinkClass}
              href="https://drive.google.com/file/d/1dp41kQIvg0yMUOGomF22Wo_00YnLs9iu/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className={socialLabelClass}>Resume</span>
              <BsFillPersonLinesFill size={20} className="shrink-0" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
