import React from "react";
import Navbar from "../components/Navbar";
// import About from "../components/About";

const About = () => {
  return (
    <div>
      <Navbar />
      <div
        name="about"
        id="about"
        className="w-full h-screen bg-[#0f141c] text-black-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className=" py-16 rounded-md bg-[#fad1a1] flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-black">
                  About
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>
                  My name is Connor Stroh & this is my React Portfolio. Hope you
                  like it!
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  A software developer with experience in building Responsive
                  and Scalable Web apps. I am well-knowledged in UI/UX
                  principles and practices. In addition to software development,
                  I am also a technical writer--simplifying topics/concepts on
                  the web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;