import React from "react";

const AboutIntro = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0f141c] text-black-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="rounded-lg py-16 bg-[#fad1a1] flex flex-col justify-center items-center">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-black">
                About Me
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p className="text-2xl">
                Welcome to my page! My name is Connor Stroh, and I am a Full
                Stack Developer currently working at the University of
                Minnesota.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am a full-stack software developer with experience in building
                front-end & back-end Web apps. I have been responsible for
                designing & developing various web applications. From building
                custom APIs to integrating with third-party services, my
                experience in both front-end and back-end development has
                allowed me to tackle a wide range of challenges and deliver
                successful solutions. With my passion for web development, I
                bring a wealth of knowledge and expertise to any project.
                Utilizing both imagination and critical thinking, I thoroughly
                enjoy undertaking creative projects. My creativity is a pivotal
                strength that has significantly contributed to my success as a
                developer and will continue to do so throughout my career.
                Alongside being highly creative, I am also analytical, relishing
                problem-solving and challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutIntro;
