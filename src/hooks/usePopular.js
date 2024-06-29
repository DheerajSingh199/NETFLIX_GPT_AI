import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { popularMovieData } from "../utils/movieSlicer";

const usePopular = () => {

  const dispatch = useDispatch();
  const popularMovieDatas = useSelector((store) => store.movie.popularMovie)


  const ApiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    dispatch(popularMovieData(json.results));
  };

  useEffect(() => {
    if(!popularMovieDatas)   
      ApiCall();
  },[]);
};

export default usePopular;
