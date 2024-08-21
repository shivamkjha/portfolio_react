import React from "react";

function About() {
  return (
    <div id="about" className="w-screen flex">
      {/* // tech logos */}
      <div className="w-full mt-40 flex-col items-">
        <div className="flex justify-center">
          <img
            className="w-24 h-30 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/java.svg"
            alt=""
          />
          <img
            className="w-24 h-30 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/python.svg"
            alt=""
          />
        </div>

        <div className="flex h-30 justify-center">
          <img
            className="w-24 h-30 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/javascript.svg"
            alt=""
          />
          <img
            className="w-24 h-30 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/html-5.svg"
            alt=""
          />
          <img
            className="w-24 h-30 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/css-3.svg"
            alt=""
          />
        </div>

        <div className="flex justify-center">
          <img
            className="w-24 h-30 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/react.svg"
            alt=""
          />
          <img
            className="w-24 h-30 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/tailwindcss-icon.svg"
            alt=""
          />

          <img
            className="w-24 h-28 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/mongodb-icon.svg"
            alt=""
          />
          <img
            className="w-24 h-30 sm:w-30 sm:h-30 m-4 hover:scale-125 transition duration-300 ease-in-out"
            src="/assets/TechLogos/nodejs-icon.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" w-full mt-20 p-0 sm:p-32 text-center ">
        <h1 className="text-5xl sm:text-6xl font-semibold text-yellow-100">
          What I do
        </h1>
        <p className="mt-10 text-center text-xl p-4">
          I'm <span className="text-black-300">Shivam Kumar Jha</span>, a
          passionate and driven Computer Science student at Vellore Institute of
          Technology, Chennai. With a strong foundation in programming and a
          keen interest in full-stack development, I've built a solid skill set
          that spans across multiple programming languages, frameworks, and
          tools. My technical skills include proficiency in Python, Java,
          JavaScript, React, Node.js, and more.
        </p>
      </div>
    </div>
  );
}

export default About;
