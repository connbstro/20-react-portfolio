import React from "react";
import Navbar from "../components/Navbar";
import Screen from "../assets/Screenshot 2023-06-07 at 1.30.46 PM.png";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          {" "}
          <img
            src={Screen}
            alt="my resume"
            // className="object-scale-down mx-auto rounded-2xl w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
