import React from "react";
import Project from "./widgets/Project";

function Projects() {
  return (
    <div id="projects" className="w-screen pt-24">
      <div className="mb-10 flex-1/2">
        <h1 className="text-6xl font-semibold text-yellow-100 text-center">
          Projects
        </h1>
      </div>

      {/* Project cards  */}
      <div className="flex justify-evenly flex-wrap">
        <div className="flex items-center">
          <Project
            pname={"Happiness using ML"}
            desc={"HTML, CSS , Flask, Python"}
            ss={"src/assets/Happiness.jpeg"}
            src={"https://github.com/shivamkjha/Happiness_Predictor"}
          />
        </div>
        <div>
          <Project
            pname={"EverythingVIT"}
            desc={"HTML, CSS , JavaScript"}
            ss={"src/assets/EverythingVIT.png"}
            url={"https://shivamkjha.github.io/EverythingVIT/"}
            src={"https://github.com/shivamkjha/EverythingVIT"}
          />
        </div>
        <div className="flex items-center">
          <Project
            pname={"Snake Game"}
            desc="JAVA, Swing"
            ss={"src/assets/SnakeGame.png"}
            src={"https://github.com/shivamkjha/Happiness_Predictor"}
          />
        </div>
        <div className="flex items-center">
          <Project
            pname={"Snake Game"}
            desc="JAVA, Swing"
            ss={"src/assets/SnakeGame.png"}
            src={"https://github.com/shivamkjha/Happiness_Predictor"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
