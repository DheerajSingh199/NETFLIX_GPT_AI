import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
<<<<<<< HEAD
  return (
    <>
      <div className=" mt-[95%] md:-mt-48  bg-black">
=======
  console.log(movies);
  return (
    <>
      <div className="-mt-48 bg-black ">
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
        <MovieList tilte={"Popular on Netflix"} movieData={movies.popularMovie} />

        <MovieList tilte={"Now Playing"} movieData={movies.movieData} />

        <MovieList tilte={"Trending"} movieData={movies.topRated} />

        <MovieList tilte={"Upcoming Movies"} movieData={movies.upcomingMovie} />
      </div>
    </>
  );
};

export default SecondaryContainer;
