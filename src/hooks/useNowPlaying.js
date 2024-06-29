import React, { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
<<<<<<< HEAD
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { upComingMovieData } from "../utils/movieSlicer";

const useNowPlaying = () => {
  
  const dispatch = useDispatch();
  const upComingMovieDatas = useSelector((store) => store.movie.movieData)

=======
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
import { useDispatch } from "react-redux";
import { upComingMovieData } from "../utils/movieSlicer";

const useNowPlaying = () => {
  const dispatch = useDispatch();
<<<<<<< HEAD
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  const ApiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    dispatch(upComingMovieData(json.results));
  };

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    if(!upComingMovieDatas) 
       ApiCall();
=======
    ApiCall();
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
    ApiCall();
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  }, []);
};

export default useNowPlaying;
