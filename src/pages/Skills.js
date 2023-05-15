import React from "react";
import Navbar from "../components/Navbar";
import { skillList } from "../utils/skillList";

const Skills = () => {
  return (
    <div>
      <Navbar />
      <div name="skills" className="w-full h-screen bg-[#0f141c] text-white">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className=" w-full flex justify-center items-center flex-col">
            <p className="text-4xl font-bold inline border-b-4 border-[#fad1a1] text-center ">
              Skills
            </p>
            <p className="py-6 text-2xl">
              List of technologies I've worked with
            </p>
            <ul>
              {skillList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
