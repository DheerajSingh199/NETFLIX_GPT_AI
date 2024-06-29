import React, { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { trailerMovieData } from "../utils/movieSlicer";

const useMovieTrailer = (id) =>{

    const dispatch = useDispatch()
    const trailerMovieDatas = useSelector((store) => store.movie.trailerData)
   
     const getMovieData = async () => {
       const fetchData = await fetch(
         `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
         MOVIE_OPTION
       );
       const json = await fetchData.json();
       const filtterData = json.results.filter((v) => {
         return v.type === "Trailer";
       });
       const data = filtterData.length === 0 ? json.results[0] : filtterData[0];
       dispatch(trailerMovieData(data))
     };
   
     useEffect(() => {
      if(!trailerMovieDatas) 
         getMovieData();
      
     }, []);


}

export default useMovieTrailer