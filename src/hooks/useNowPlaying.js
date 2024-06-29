import React, { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { upComingMovieData } from "../utils/movieSlicer";

const useNowPlaying = () => {
  
  const dispatch = useDispatch();
  const upComingMovieDatas = useSelector((store) => store.movie.movieData)

  const ApiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    dispatch(upComingMovieData(json.results));
  };

  useEffect(() => {
    if(!upComingMovieDatas) 
       ApiCall();
  }, []);
};

export default useNowPlaying;
