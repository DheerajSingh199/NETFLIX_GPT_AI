import React, { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { upComingMovieData } from "../utils/movieSlicer";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const ApiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    dispatch(upComingMovieData(json.results));
  };

  useEffect(() => {
    ApiCall();
  }, []);
};

export default useNowPlaying;
