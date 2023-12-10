import React from "react";

function About() {
  return (
    <div id="about" className="mt-60 w-screen h-screen pt-28 p-16 flex">
      <div className="m-5 w-full text-center">
        <h1 className="text-6xl font-semibold text-yellow-100 mt-10">What I do</h1>
        <p className="mt-10 text-center text-lg">
          I'm Shivam Kumar Jha I'm a pre final year B.tech Computer Science
          Engineering <br />
          student at VIT Chennai. I'm a full stack web developer proficient in
          JavaScript. <br />
           I'm currenty making websites using React js in the
          frontend and Node js and <br />  express js in the backend <br />
        </p>
        <div className="w-full p-5 mt-5">
          <div className="flex justify-center">
            <img
              className="w-20 h-20 m-2"
              src="/assets/TechLogos/java.svg"
              alt=""
            />
            <img
              className="w-20 h-20 m-2"
              src="/assets/TechLogos/python.svg"
              alt=""
            />
            <img
              className="w-20 h-20 m-2"
              src="/assets/TechLogos/javascript.svg"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-20 h-20 m-2"
              src="/assets/TechLogos/html-5.svg"
              alt=""
            />
            <img
              className="w-20 h-20 m-2"
              src="/assets/TechLogos/css-3.svg"
              alt=""
            />
            <img
              className="w-20 h-20 m-2"
              src="/assets/TechLogos/tailwindcss-icon.svg"
              alt=""
            />
            <img
              className="w-20 h-20 m-2"
              src="/assets/TechLogos/react.svg"
              alt=""
            />
            <img
              className="w-16 h-16 m-2"
              src="/assets/TechLogos/mongodb-icon.svg"
              alt=""
            />
            <img
              className="w-20 h-20 m-2"
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
