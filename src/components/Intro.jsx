import React from "react";
import Typed from "typed.js";
import { useEffect,useRef } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import './intro.css';



function Intro() {
  const el = React.useRef(null);
  var bio = ` I like building things for the web!`;

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [bio],
      startDelay : 400,
      typeSpeed: 50,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
      
    });

    
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div className="flex w-screen h-1/2 mt-32 sm:mt-56 flex-wrap-reverse sm:flex-nowrap p-2 sm:p-0 pt-10 sm:pt-0">
      <div className="flex w-full sm:w-2/3 items-center justify-center sm:ml-20 ">
        <div className="overflow-hidden animate-slideInLeft w-11/12  sm:w-2/3 ml-3 sm:ml-0">
          <p className="text-xl text-blue-300">Hello I'm</p>
          <p className="text-4xl sm:text-6xl text-yellow-100 font-bold">
            Shivam Kumar Jha
          </p>

          <p className="text-white text-lg sm:text-xl leading-7 h-24 sm:h-16">
            I'm a final year Software Engineering student at VIT Chennai. 
            <span ref={el} />
            
          </p>
          <div className="flex">
            {/* <div className="border mt-3 w-40 h-0 "></div> */}
            <button className=" bg-green-600 text-white text-xl sm:w-52 mr-2 p-1 sm:p-2 rounded-lg shadow-2xl hover:bg-green-700 hover:text-white ">
              <a href="public/assets/resume.pdf" download>
                Resume
              </a>
            </button>
            <div className="border mt-3 w-full h-0"></div>
          </div>
        </div>
      </div>
      <div className="w-1/2 animate-slideInRight">
        <img
          className="rounded-full sm:w-96 sm:h-96 ml-24 sm:ml-10 border shadow-2xl w-44 h-44"
          src="https://res.cloudinary.com/drxezxie3/image/upload/v1724223198/portfolio/profile_t46qzg.jpg"
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
