import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {

   const movie =  useSelector((state) => state.movie?.movieData )
   if(movie == null ) return
   const mainMovie = movie[0]

   const {original_title,overview,id } = mainMovie

  return (
    <div>
      <VideoTitle tilte={original_title} overview={overview}/>

      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
