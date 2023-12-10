import React, { useState } from 'react'

function Project({ss,url,src,pname,desc}) {
  return (
    <div className=" w-96 h-96 border-black border-4 rounded-xl overflow-hidden text-center m-2 hover:scale-105 transition duration-300 ease-in-out shadow-2xl">
      <img className="w-96 h-60" src={ss} alt="" />

      <div className="flex items-center justify-evenly mt-2">
        <div className=" w-64">
          <h1 className="text-xl text-blue-300">{pname}</h1>
          <p className="text-l">{desc}</p>
        </div>

        <div className="flex flex-wrap w-30  h-24 justify-center items-center">
          {url && (
            <a className="text-white text-center text-l" href={url}>
              <button className=" bg-green-600 rounded-xl p-2">
                Visit Site
              </button>
            </a>
          )}
          <br />
          <a className="text-white text-center text-l" href={src}>
            <button className=" bg-green-600 rounded-xl p-2">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project
