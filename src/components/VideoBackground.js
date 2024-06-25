import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerData);

  useMovieTrailer(id);

  return (
    <div className="overflow-hidden">
      <iframe
        className="w-full aspect-video object-cover "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
