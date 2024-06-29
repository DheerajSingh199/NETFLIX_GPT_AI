import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerData);

  useMovieTrailer(id);

  return (
<<<<<<< HEAD
   <div className="w-full h-full bg-black">
     <div className="overflow-hidden w-full">
=======
    <div className="overflow-hidden">
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
      <iframe
        className="w-full aspect-video object-cover "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
<<<<<<< HEAD
   </div>
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  );
};

export default VideoBackground;
