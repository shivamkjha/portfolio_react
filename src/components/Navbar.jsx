import React from "react";

function Navbar() {
  return (
    <div
      className="w-screen h-10 text-blue-300 flex justify-center p-9 items-center text-xl font-light mb-40 fixed top-0 z-10"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
      }}
    >
      <div className="flex w-96 justify-evenly cursor-pointer">
        <div className=" hover:text-yellow-100 hover:scale-110 transition duration-200 ease-in-out">
          <a href="#about">About</a>
        </div>
        <div className="hover:text-yellow-100 hover:scale-110 transition duration-200 ease-in-out">
          <a href="#projects">Projects</a>
        </div>
        <div className="hover:text-yellow-100 hover:scale-110 transition duration-200 ease-in-out">
          <a href="mailto:shivamjhaaaa@gmail.com">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
