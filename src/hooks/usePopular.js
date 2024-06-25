import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { popularMovieData } from "../utils/movieSlicer";

const usePopular = () => {
  const dispatch = useDispatch();

  const ApiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    dispatch(popularMovieData(json.results));
  };

  useEffect(() => {
    ApiCall();
  },[]);
};

export default usePopular;
