import React from "react";
import Navbar from "./Navbar";
import codingQuiz from "../assets/codingQuiz.png";
import Screen from "../assets/Screenshot 2023-05-25 at 5.16.13 PM.png";
import weatherDashboard from "../assets/weatherDashBoard.png";
import workSchedule from "../assets/workDayScheduler.png";
import scheduler from "../assets/scheduler.png";
import decisive from "../assets/desicive.png";

const Portfolio = () => {
  return (
    <div className="w-full md:h-screen text-black bg-[#0f141c]">
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#fad1a1]">
            Portfolio
          </p>
          <p className="py-6 text-2xl text-white">
            Check out some of my most recent work
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Screen})` }}
            className="group container rounded-md flex justify-center items-center mx-auto front-img"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-black tracking-wider">
                Social Network Application
              </span>
              <p className="text-center p-2">
                API application where users can share their thoughts, react to
                friends thoughts, and create a friend list.
              </p>
              <div className="pt-8 text-center">
                <a href="https://mash-game-project.herokuapp.com/">
                  <button className="text-center rounded-md px-2 py-2 m-2 bg-white text-black hover:font-bold hover:px-4 hover:py-3 text-md hover:text-lg hover:border-black hover:border-2">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${codingQuiz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto front-img"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className="text-lg font-bold text-black tracking-wider">
                Coding Quiz
              </span>
              <p className="text-center p-2">
                Simple coding challenge built with vanilla JavaScript, HTML &
                CSS.
              </p>
              <div className="pt-8 text-center">
                <a href="https://connbstro.github.io/4-CodingQuiz/">
                  <button className="text-center rounded-md px-2 py-2 m-2 bg-white text-black hover:font-bold hover:px-4 hover:py-3 text-md hover:text-lg hover:border-black hover:border-2">
                    Webpage
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weatherDashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto front-img"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-black tracking-wider">
                Weather Dashboard
              </span>
              <p className="text-center p-2">
                A weather API that retrieves a current & 5 day forecast for a
                searched city.
              </p>
              <div className="pt-8 text-center">
                <a href="https://connbstro.github.io/6-WeatherDashboard/">
                  <button className="text-center rounded-md px-2 py-2 m-2 bg-white text-black hover:font-bold hover:px-4 hover:py-3 text-md hover:text-lg hover:border-black hover:border-2">
                    Webpage
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${workSchedule})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto front-img"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-black tracking-wider">
                Work day scheduler
              </span>
              <p className="text-center p-2">
                A calendar application that allows a user to save events for
                each hour of the day as well as the tasks for that day.
              </p>
              <div className="pt-8 text-center">
                <a href="https://connbstro.github.io/05-workdayScheduler/">
                  <button className="text-center rounded-md px-2 py-2 m-2 bg-white text-black hover:font-bold hover:px-4 hover:py-3 text-md hover:text-lg hover:border-black hover:border-2">
                    Webpage
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${scheduler})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto front-img"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-black tracking-wider">
                Scheduler
              </span>
              <p className="text-center p-2">
                A application that can create a schedule for any business.
              </p>
              <div className="pt-8 text-center">
                <a href="https://appt-scheduler-app.herokuapp.com/">
                  <button className="text-center rounded-md px-2 py-2 m-2 bg-white text-black hover:font-bold hover:px-4 hover:py-3 text-md hover:text-lg hover:border-black hover:border-2">
                    Webpage
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${decisive})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto front-img"
          >
            <div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
              <span className=" text-lg font-bold text-black tracking-wider">
                Decisive
              </span>
              <p className="text-center p-2">
                A application that can help those who are more isolated go out
                if they want to.
              </p>
              <div className="pt-8 text-center">
                <a href="https://srichens.github.io/decisive/">
                  <button className="text-center rounded-md px-2 py-2 m-2 bg-white text-black hover:font-bold hover:px-4 hover:py-3 text-md hover:text-lg hover:border-black hover:border-2">
                    Webpage
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
