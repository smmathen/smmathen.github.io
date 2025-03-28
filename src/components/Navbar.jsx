import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaGoodreadsG } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <style>
        {`
          a:hover {
            color: #cf4f4f;
          }
        `}
      </style>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300">
        <div>
          <Link to="home" smooth={true} duration={500}>
            <img
              className="transform transition-all hover:scale-125 cursor-pointer"
              src={Logo}
              alt="Logo"
              style={{ width: "200px" }}
            />
          </Link>
        </div>
        {/*Menu*/}
        {/* hide list on default, anything above medium screen turns into flex */}
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {/* if we click on hamburger, it switches to the opposite (either into the X or the hamburger) */}
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/*Mobile Menu*/}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/*Social Icons*/}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1]">
              <a
                className="flex justify-between items-center w-full hover:text-white"
                href="https://www.linkedin.com/in/shawn-mathen/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
              <a
                className="flex justify-between items-center w-full hover:text-white"
                href="https://github.com/smmathen"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>

            <li className="w-[180px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-300 bg-[#75420e]">
              <a
                className="flex justify-between items-center w-full hover:text-white"
                href="https://www.goodreads.com/user/show/173531074-shawn-mathen"
                target="_blank"
                rel="noreferrer noopener"
              >
                Goodreads <FaGoodreadsG size={30} />
              </a>
            </li>

            <Link to="contact" smooth={true} duration={500}>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4997d0] hover:text-white">
                <a
                  className="flex justify-between items-center w-full hover:text-white"
                  href="/"
                >
                  Email <HiOutlineMail size={30} />
                </a>
              </li>
            </Link>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#500000]">
              <a
                className="flex justify-between items-center w-full hover:text-white"
                href="https://drive.google.com/file/d/1sksVwW4aL0-gstKCEdneeBwUFWK-ZElQ/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
