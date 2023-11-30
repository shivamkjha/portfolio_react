import React from 'react'

function About() {
  return (
    <div id="about" className="mt-60 w-screen h-screen pt-28 p-16 flex">
      <div className="text-center m-5 flex-1/2">
        <h1 className="text-5xl text-yellow-200 ">About</h1>
        <p>
          I'm Shivam Kumar Jha I'm a pre final year Computer Science Btech
          student at VIT Chennai. <br />
        </p>
      </div>

      <div className="w-1/2 h-1/3 flex flex-1/2">
        <iframe
          className="w-full h-full rounded-xl m-5"
          src="https://leetcode.com/shivamkjha/"
          frameborder="0"
        ></iframe>
        
      </div>
    </div>
  );
}

export default About
