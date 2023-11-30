import React from "react";
import Project from "./widgets/Project";

function Projects() {
  return (
    <div id="projects" className=" w-screen">
      <div className="m-24 flex-1/2">
        <h1 className="text-5xl text-yellow-200 text-center ">Projects</h1>
      </div>

      <div className="w-screen flex justify-center">
        <div className="">
          <div className="flex items-center">
            <Project
              pname={"Happiness using ML"}
              desc={"HTML, CSS , Flask, Python"}
              ss={"src/assets/Happiness.jpeg"}
              src={"https://github.com/shivamkjha/Happiness_Predictor"}
            />
            <div className="border-4 border-blue-300 h-1 w-48">Nov 2023</div>
          </div>
          <div className=" mt-24 flex items-center">
            <Project
              pname={"Snake Game"}
              desc="JAVA, Swing"
              ss={"src/assets/SnakeGame.png"}
              src={"https://github.com/shivamkjha/Happiness_Predictor"}
            />

            <div className="border-4 border-blue-300 h-1 w-48 shadow-2xl">
              June 2023
            </div>
          </div>
        </div>

        <div className="border-4 border-blue-300 w-1 h-screen"></div>
        <div className="border-4 border-blue-300 w-1 h-screen"></div>

        <div className="">
          <div className="mt-48 flex items-center">
            <div className="border-4 border-blue-300 h-1 w-48 text-end">
              Sept 2023
            </div>
            <Project
              pname={"EverythingVIT"}
              desc={"HTML, CSS , JavaScript"}
              ss={"src/assets/EverythingVIT.png"}
              url={"https://shivamkjha.github.io/EverythingVIT/"}
              src={"https://github.com/shivamkjha/EverythingVIT"}
            />
          </div>
          <div className="mt-24 flex items-center">
            <div className="border-4 border-blue-300 h-1 w-48"></div>
            <Project
              pname={"EverythingVIT"}
              desc={"HTML, CSS , JavaScript"}
              ss={"src/assets/EverythingVIT.png"}
              url={"https://shivamkjha.github.io/EverythingVIT/"}
              src={"https://github.com/shivamkjha/EverythingVIT"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
