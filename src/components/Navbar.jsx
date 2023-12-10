import React from "react";

function Navbar() {
  return (
    <div
      className="w-screen h-20 text-blue-300 flex p-9 items-center text-xl font-light mb-40 fixed top-0 z-10"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div className="text-6xl mr-80 font-semibold m-2 text-yellow-100">
        <a href="/">S.</a>
      </div>
      <div className="flex ml-24 w-96 cursor-pointer justify-evenly">
        <div className=" hover:text-yellow-100 hover:scale-110 hover:underline hover:underline-offset-8 transition duration-200 ease-in-out relative">
          <a href="#about">About</a>
        </div>
        <div className="hover:text-yellow-100 hover:scale-110 hover:underline hover:underline-offset-8 transition duration-200 ease-in-out">
          <a href="#projects">Portfolio</a>
        </div>
        <div className="hover:text-yellow-100 hover:scale-110 hover:underline hover:underline-offset-8 transition duration-200 ease-in-out">
          <a href="mailto:shivamjhaaaa@gmail.com">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
