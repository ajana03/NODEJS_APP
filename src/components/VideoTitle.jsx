import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" top-24 right-0 absolute pt-6 pl-12  bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-5xl font-bold m-4">{title}</h1>
      <p className="m-4 font-bold text-lg w-1/2">{overview}</p>

      <div className="p-4 ">
        <button className="bg-white hover:bg-gray-200 mr-4 text-black font-bold m py-1.5 px-8 rounded focus:outline-none focus:shadow-outline">
          ▶️Play
        </button>
        <button className="bg-gray-500/50 hover:bg-gray-600/50  text-white font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
