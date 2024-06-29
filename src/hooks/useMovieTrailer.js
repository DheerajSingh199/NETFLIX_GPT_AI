import React, { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
=======
import { useDispatch } from "react-redux";
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
import { trailerMovieData } from "../utils/movieSlicer";

const useMovieTrailer = (id) =>{

    const dispatch = useDispatch()
<<<<<<< HEAD
    const trailerMovieDatas = useSelector((store) => store.movie.trailerData)
=======
   
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
   
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
<<<<<<< HEAD
=======
   
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
       dispatch(trailerMovieData(data))
     };
   
     useEffect(() => {
<<<<<<< HEAD
      if(!trailerMovieDatas) 
         getMovieData();
      
=======
       getMovieData();
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
     }, []);


}

export default useMovieTrailer