import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
<<<<<<< HEAD
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovieData } from "../utils/movieSlicer";

const useUpcoming = () => {
  const upcomingMovieDatas   = useSelector((store) => store.movie.upcomingMovie)

=======
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
import { useDispatch } from "react-redux";
import { upcomingMovieData } from "../utils/movieSlicer";

const useUpcoming = () => {
<<<<<<< HEAD
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
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
<<<<<<< HEAD
<<<<<<< HEAD
    if(!upcomingMovieDatas) 
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
    ApiCall();
  },[]);
};

export default useUpcoming;
