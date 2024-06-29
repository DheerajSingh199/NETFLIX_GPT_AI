import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { popularMovieData } from "../utils/movieSlicer";

const usePopular = () => {

  const dispatch = useDispatch();
  const popularMovieDatas = useSelector((store) => store.movie.popularMovie)

=======
import { useDispatch } from "react-redux";
import { popularMovieData } from "../utils/movieSlicer";

const usePopular = () => {
  const dispatch = useDispatch();
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9

  const ApiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    dispatch(popularMovieData(json.results));
  };

  useEffect(() => {
<<<<<<< HEAD
    if(!popularMovieDatas)   
      ApiCall();
=======
    ApiCall();
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  },[]);
};

export default usePopular;
