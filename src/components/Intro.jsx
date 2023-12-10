import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";

function Intro() {
  return (
    <div className="flex w-screen h-1/2 mt-56">
      <div className="flex w-2/3 items-center justify-center ml-20">
        <div className="">
          <p className="text-blue-300 text-xl">Hello I'm</p>
          <p className="text-6xl text-yellow-100 font-bold">Shivam Kumar Jha</p>
          <p className="text-white text-xl leading-7">
            I'm a pre final year Software Engineering student <br /> at VIT
            Chennai. I like building things for the web. <br />
            I'm also interested in Machine Learning.
          </p>
          <div className="flex ">
            {/* <div className="border mt-3 w-40 h-0 "></div> */}
            <button className=" bg-green-600 text-white p-3 m-2 rounded-lg shadow-2xl">
              <a href="src/assets/resume.pdf" download>
                <DownloadIcon />
                Download Resume
              </a>
            </button>
            <div className="border mt-3 w-80 h-0 "></div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="rounded-full w-96 h-96 ml-10 border shadow-2xl"
          src="public/assets/profile.jpg"
          alt=""
        />
        <div className=" w-52 h-16 ml-32 mt-1 flex items-center justify-evenly cursor-pointer">
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
