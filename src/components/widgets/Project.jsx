import React, { useState } from 'react'

function Project({ss,url,src,pname,desc}) {
  return (
    <div className=" w-96 h-80 border-black border-4 rounded-xl overflow-hidden text-center m-2 hover:scale-105 transition duration-300 ease-in-out shadow-2xl">
      <img className="w-96 h-60" src={ss} alt="" />

      <div className="flex items-center justify-evenly">
        <div className=" w-64">
          <h1 className="text-xl text-blue-300">{pname}</h1>
          <p className="text-l">{desc}</p>
        </div>

        <div className=' items-center'>
          {url && (
            <a className="text-white text-center text-l w-1/2" href={url}>
              Go to Site
            </a>
          )}
          <br />
          <a className="text-white text-center text-l w-1/2" href={src}>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project
