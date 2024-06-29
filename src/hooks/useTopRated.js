import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { topRatedData } from "../utils/movieSlicer";

const useTopRated = () => {
  const topRatedDatas = useSelector((store) => store.movie.topRated)

=======
import { useDispatch } from "react-redux";
import { topRatedData } from "../utils/movieSlicer";

const useTopRated = () => {
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  const dispatch = useDispatch();

  const ApiCall = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_OPTION
    );
    const json = await data.json();
    dispatch(topRatedData(json.results));
  };

  useEffect(() => {
<<<<<<< HEAD
    if(!topRatedDatas) 
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
    ApiCall();
  },[]);
};

export default useTopRated;
