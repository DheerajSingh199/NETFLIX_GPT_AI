import React from "react";

const VideoTitle = ({ tilte, overview }) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="md:pt-60 pt-52 aspect-video absolute text-white md:bg-gradient-to-r from-[#000000] to-[rgba(82,82,91,0.0)]">
    <div className="bg-black md:bg-transparent">
    <p className="text-6xl mt-16  md:mt-10 text-center md:text-start md:text-nowrap md:pl-14  font-semibold ">{tilte}</p>
    
    <p className="pl-14 pt-6 w-[95%] md:w-[50%] ">{overview}</p>
=======
    <div className="pt-60 aspect-video absolute text-white bg-gradient-to-r from-[#000000] to-[rgba(82,82,91,0.0)]">
      <p className="text-6xl pl-14  font-semibold ">{tilte}</p>
      <p className="pl-14 pt-6 w-[50%]">{overview}</p>
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
    <div className="pt-60 aspect-video absolute text-white bg-gradient-to-r from-[#000000] to-[rgba(82,82,91,0.0)]">
      <p className="text-6xl pl-14  font-semibold ">{tilte}</p>
      <p className="pl-14 pt-6 w-[50%]">{overview}</p>
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9

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
<<<<<<< HEAD
<<<<<<< HEAD
    </div>
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  );
};

export default VideoTitle;
