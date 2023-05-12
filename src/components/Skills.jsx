import React from "react";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0f141c] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-white text-center ">
            Skills
          </p>
          <p className="py-4 text-2xl">
            I want to learn and grow. Here's a list of technologies I've worked
            with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">JavaScript</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">React</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">GitHub</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">Express.js</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">MongoDB</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">Back-end/Front-end</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">Tailwind</p>
          </div>
          <div className="hover:scale-110 hover:shadow-md hover:shadow-white hover:cursor-grab duration-500">
            <p className="my-4">Node.js</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">Mongodb</p>
          </div>
          <div className="hover:shadow-md hover:shadow-white hover:scale-110 hover:cursor-grab duration-500">
            <p className="my-4">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
