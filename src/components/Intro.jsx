import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import './intro.css';

function Intro() {
  return (
    <div className="flex w-screen h-1/2 mt-32 sm:mt-56 flex-wrap-reverse sm:flex-nowrap p-2 sm:p-0">
      <div className="flex w-full sm:w-2/3 items-center justify-center sm:ml-20 ">
        <div className="overflow-hidden animate-slideInLeft w-full sm:w-2/3 ml-3 sm:ml-0">
          <p className="text-xl text-blue-300">
            Hello I'm
          </p>
          <p className="text-4xl sm:text-6xl text-yellow-100 font-bold">Shivam Kumar Jha</p>

          <p className="text-white text-lg sm:text-xl leading-7">
            I'm a pre final year Software Engineering student at VIT
            Chennai. I like building things for the web.
            I'm also interested in Machine Learning.
          </p>
          <div className="flex ">
            {/* <div className="border mt-3 w-40 h-0 "></div> */}
            <button className=" bg-green-600 text-white sm:w-80 m-2 sm:m-1 p-2 sm:p-3 rounded-lg shadow-2xl">
              <a href="src/assets/resume.pdf" download>
                <DownloadIcon />
                Download Resume
              </a>
            </button>
            <div className="border mt-3 w-40 sm:w-full h-0"></div>
          </div>
        </div>
      </div>
      <div className="w-1/2 animate-slideInRight">
        <img
          className="rounded-full sm:w-96 sm:h-96 ml-24 sm:ml-10 border shadow-2xl w-44 h-44"
          src="/assets/profile.jpg"
          alt=""
        />
        <div className=" w-52 h-16 ml-20 sm:ml-32 mt-2 sm:mt-1 flex sm:items-center justify-evenly cursor-pointer">
          <LinkedInIcon
            fontSize="large"
            // color="primary"
            className="transition duration-300 ease-in-out transform hover:scale-125"
          />
          <TwitterIcon
            fontSize="large"
            className="transition duration-200 ease-in-out transform hover:scale-125"
          />
          <GitHubIcon
            fontSize="large"
            className="transition duration-0 ease-in-out transform hover:scale-125"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
