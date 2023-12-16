import React from "react";

function About() {
  return (
    <div id="about" className=" w-screen p-0 sm:p-16 flex ">
      <div className="m-5 w-full p-0 sm:p-32 text-center ">
        <h1 className="text-5xl sm:text-6xl font-semibold text-yellow-100 mt-10">
          What I do
        </h1>
        <p className="mt-10 text-center text-lg">
          I'm Shivam Kumar Jha I'm a pre final year B.tech Computer Science
          Engineering student at VIT Chennai. I'm a full stack web developer
          proficient in JavaScript. I'm currenty making websites using React js
          in the frontend and Node js and express js in the backend
        </p>
        <div className="w-full p-5 mt-5">
          <div className="flex justify-center">
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-2 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/java.svg"
              alt=""
            />
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-2 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/python.svg"
              alt=""
            />
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-2 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/javascript.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-3 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/html-5.svg"
              alt=""
            />
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-3 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/css-3.svg"
              alt=""
            />
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-3 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/tailwindcss-icon.svg"
              alt=""
            />
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-3 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/react.svg"
              alt=""
            />
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-3 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/mongodb-icon.svg"
              alt=""
            />
            <img
              className="w-12 h-12 sm:w-20 sm:h-20 m-3 hover:scale-125 transition duration-300 ease-in-out"
              src="/assets/TechLogos/nodejs-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <div className="w-1/2 h-1/3 flex flex-1/2">
        <iframe
          className="w-full h-full rounded-xl m-5"
          src="https://leetcode.com/shivamkjha/"
          frameborder="0"
        ></iframe>
      </div> */}
    </div>
  );
}

export default About;
