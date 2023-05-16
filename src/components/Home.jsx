import React from "react";
import { Link} from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/me.png";
import { Link } from "react-scroll";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0f141c]">
      <Navbar />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#fad1a1]">
            React Portfolio
          </h2>
          <p className="text-white py-4 max-w-md">
            I am new to React development and am currently a student at the
            University of Minnesota taking their full stack web development
            bootcamp.
          </p>
          <div>
            <Link
              to="/about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-900 to-[#fad1a1] cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
