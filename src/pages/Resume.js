import React from "react";
import Navbar from "../components/Navbar";
import Screen from "../assets/Screenshot 2023-06-07 at 1.30.46 PM.png";

const Resume = () => {
  return (
    <div className="w-full h-full bg-[#0f141c] text-black-300">
      <Navbar />
      <div className="">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            {" "}
            <img
              src={Screen}
              alt="my resume"
              className="mx-auto w-full m-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
