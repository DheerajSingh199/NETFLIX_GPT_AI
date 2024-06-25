import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({movieData,tilte}) => {
    // console.log(movieData);
    if (movieData === null)  return null 

  return (
    <div className="relative pl-20 py-2 overflow-hidden ">
         <h2 className="text-white font-semibold text-xl">
          {" "}
          {tilte}
        </h2>
      <div className="w-full h-full flex gap-3 items-center justify-between hover:overflow-y-hidden ">        
        {movieData.map((item,index) =>{
             return <MovieCards key={index} posterPath={item.poster_path} />
        })}
      
      </div>
    </div>
  );
};

export default MovieList;
