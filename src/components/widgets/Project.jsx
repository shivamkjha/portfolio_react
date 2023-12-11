import React, { useState } from 'react'

function Project({ss,url,src,pname,desc}) {
  return (
    <div className="m-10 sm:w-96 sm:h-96 border-black border-4 rounded-xl overflow-hidden text-center hover:scale-105 transition duration-300 ease-in-out shadow-2xl">
      <img className=" sm:w-96 sm:h-60" src={ss} alt="" />

      <div className="flex items-center justify-evenly mt-2 p-1">
        <div className=" w-64">
          <h1 className="text-xl text-blue-300">{pname}</h1>
          <p className="text-l">{desc}</p>
        </div>

        <div className="flex flex-wrap w-28 h-28 justify-center items-center">
          {url && (
            <a className="text-white text-center text-l" href={url}>
              <button className=" bg-green-600 rounded-2xl w-24 p-2">
                Visit Site
              </button>
            </a>
          )}
          <a className="text-white text-center text-l" href={src}>
            <button className=" bg-green-600 rounded-2xl w-28 p-2">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project
