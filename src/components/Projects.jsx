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
      <div className="flex justify-center sm:justify-center flex-wrap">
        <div className="flex items-center">
          <Project
            pname={"SOSH"}
            desc={"React js, Node js , Mongo db, EJS, Vercel, Render"}
            ss={
              "https://res.cloudinary.com/drxezxie3/image/upload/v1724225537/portfolio/Screenshot_2024-08-21_at_12.31.01_ekagkz.png"
            }
            url={"https://mern-project-wine.vercel.app/"}
            // src={"https://github.com/shivamkjha/ecell_vitc"}
          />
        </div>
        <div className="flex items-center">
          <Project
            pname={"E-Cell Website"}
            desc={"React js, Tailwind css, Material UI, Vercel"}
            ss={
              "https://res.cloudinary.com/drxezxie3/image/upload/v1724220485/portfolio/e_cell_website.png"
            }
            url={"https://ecell-vitc-2k68.vercel.app"}
            src={"https://github.com/shivamkjha/ecell_vitc"}
          />
        </div>
        <div className="flex items-center">
          <Project
            pname={"Happiness Index"}
            desc={"HTML, CSS , Flask, Python"}
            ss={
              "https://res.cloudinary.com/drxezxie3/image/upload/v1724220058/portfolio/Happiness_report.jpg"
            }
            src={"https://github.com/shivamkjha/Happiness_Predictor"}
          />
        </div>
        <div>
          <Project
            pname={"EverythingVIT"}
            desc={"HTML, CSS , JavaScript"}
            ss={
              "https://res.cloudinary.com/drxezxie3/image/upload/v1724220058/portfolio/EverythingVIT.png"
            }
            url={"https://shivamkjha.github.io/EverythingVIT/"}
            src={"https://github.com/shivamkjha"}
          />
        </div>
        <div className="flex items-center">
          <Project
            pname={"Snake Game"}
            desc="JAVA, Swing"
            ss={
              "https://res.cloudinary.com/drxezxie3/image/upload/v1724220059/portfolio/snake_game.png"
            }
            src={"https://github.com/shivamkjha/Happiness_Predictor"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
