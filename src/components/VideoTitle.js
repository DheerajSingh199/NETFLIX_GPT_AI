import React from "react";

const VideoTitle = ({ tilte, overview }) => {
  return (
    <div className="pt-60 aspect-video absolute text-white bg-gradient-to-r from-[#000000] to-[rgba(82,82,91,0.0)]">
      <p className="text-6xl pl-14  font-semibold ">{tilte}</p>
      <p className="pl-14 pt-6 w-[50%]">{overview}</p>

      <div className="pl-14 mt-4">
        <button className="h-12 w-32 text-center rounded-md font-bold text-lg hover:opacity-60 bg-zinc-50 text-black ">
          {" "}
          <i className="ri-play-fill"></i> Play
        </button>
        <button className="h-12 w-40 text-center rounded-md font-bold text-lg  ml-4 hover:opacity-60 bg-gray-500 text-white "> 
          {" "}
          <i className="pr-1 ri-error-warning-line"></i>More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
