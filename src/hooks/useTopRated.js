import { useEffect } from "react";
import { MOVIE_OPTION } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { topRatedData } from "../utils/movieSlicer";

const useTopRated = () => {
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
    ApiCall();
  },[]);
};

export default useTopRated;
