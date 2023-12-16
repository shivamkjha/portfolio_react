import React from "react";
import Project from "./widgets/Project";

function Projects() {
  return (
    <div id="projects" className="w-screen pt-24">
      <div className="mb-10 flex-1/2">
        <h1 className="text-5xl sm:text-6xl font-semibold text-yellow-100 text-center">
          Projects
        </h1>
      </div>

      {/* Project cards  */}
      <div className="flex justify-center sm:justify-evenly flex-wrap">
        <div className="flex items-center">
          <Project
            pname={"Happiness Index"}
            desc={"HTML, CSS , Flask, Python"}
            ss={"/assets/Happiness.jpeg"}
            src={"https://github.com/shivamkjha/Happiness_Predictor"}
          />
        </div>
        <div>
          <Project
            pname={"EverythingVIT"}
            desc={"HTML, CSS , JavaScript"}
            ss={"/assets/EverythingVIT.png"}
            url={"https://shivamkjha.github.io/EverythingVIT/"}
            src={"https://github.com/shivamkjha/EverythingVIT"}
          />
        </div>
        <div className="flex items-center">
          <Project
            pname={"Snake Game"}
            desc="JAVA, Swing"
            ss={"/assets/SnakeGame.png"}
            src={"https://github.com/shivamkjha/Happiness_Predictor"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
