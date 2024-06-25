import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  console.log(movies);
  return (
    <>
      <div className="-mt-48 bg-black ">
        <MovieList tilte={"Popular on Netflix"} movieData={movies.popularMovie} />

        <MovieList tilte={"Now Playing"} movieData={movies.movieData} />

        <MovieList tilte={"Trending"} movieData={movies.topRated} />

        <MovieList tilte={"Upcoming Movies"} movieData={movies.upcomingMovie} />
      </div>
    </>
  );
};

export default SecondaryContainer;
