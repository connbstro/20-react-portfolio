import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "./Header";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0f141c] text-gray-300">
      <div>
        <Header />
      </div>
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link className="hover:underline" to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            to="/about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            to="/resume"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            to="/skills"
            smooth={true}
            duration={500}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            to="/portfolio"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline"
            to="/contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

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
          <Link
            onClick={handleClick}
            to="/portfolio"
            smooth={true}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="/contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
