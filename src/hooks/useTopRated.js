import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { topRatedData } from "../utils/movieSlicer";

const useTopRated = () => {
  const topRatedDatas = useSelector((store) => store.movie.topRated)

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
    if(!topRatedDatas) 
    ApiCall();
  },[]);
};

export default useTopRated;
