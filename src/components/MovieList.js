import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({movieData,tilte}) => {
    // console.log(movieData);
    if (movieData === null)  return null 

  return (
    <div className="relative pl-10 md:pl-20 md:py-2 overflow-hidden ">
         <h2 className="text-white py-4 font-bold text-3xl md:text-2xl">
          {" "}
          {tilte}
        </h2>
      <div className="w-full h-full flex gap-3 items-center  overflow-y-hidden hover:overflow-x-scroll ">        
        {movieData.map((item,index) =>{
             return <MovieCards key={index} posterPath={item.poster_path} />
        })}
      
      </div>
    </div>
  );
};

export default MovieList;
