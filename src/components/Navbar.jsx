import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0f141c] text-gray-300">
      <div>
        <h1 className=" font-thin text-2xl font-serif">CS</h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="/resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/works" smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0f141c] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/about" smooth={true} duration={500}>
            About Me
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/works" smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="/contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/connor-stroh-636a58276/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/connbstro"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fad1a1]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#473c3e]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
