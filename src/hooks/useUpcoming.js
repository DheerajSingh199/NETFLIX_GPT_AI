import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovieData } from "../utils/movieSlicer";

const useUpcoming = () => {
  const upcomingMovieDatas   = useSelector((store) => store.movie.upcomingMovie)

  const dispatch = useDispatch();

  const ApiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    dispatch(upcomingMovieData(json.results));
  };

  useEffect(() => {
    if(!upcomingMovieDatas) 
    ApiCall();
  },[]);
};

export default useUpcoming;
