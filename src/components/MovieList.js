import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({movieData,tilte}) => {
    // console.log(movieData);
    if (movieData === null)  return null 

  return (
<<<<<<< HEAD
    <div className="relative pl-10 md:pl-20 md:py-2 overflow-hidden ">
         <h2 className="text-white py-4 font-bold text-3xl md:text-2xl">
          {" "}
          {tilte}
        </h2>
      <div className="w-full h-full flex gap-3 items-center  overflow-y-hidden hover:overflow-x-scroll ">        
=======
    <div className="relative pl-20 py-2 overflow-hidden ">
         <h2 className="text-white font-semibold text-xl">
          {" "}
          {tilte}
        </h2>
      <div className="w-full h-full flex gap-3 items-center justify-between hover:overflow-y-hidden ">        
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
        {movieData.map((item,index) =>{
             return <MovieCards key={index} posterPath={item.poster_path} />
        })}
      
      </div>
    </div>
  );
};

export default MovieList;
