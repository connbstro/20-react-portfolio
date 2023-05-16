import React from "react";
import leaf from "../assets/leaf.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div name="home" className="h-screen w-full bg-[#0f141c]">
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
                className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#fad1a1] cursor-pointer hover:font-bold"
              >
                About Me
              </Link>
            </div>
          </div>
          <div>
            <img
              src={leaf}
              alt="my profile"
              className="object-scale-down mx-auto rounded-2xl w-2/3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
