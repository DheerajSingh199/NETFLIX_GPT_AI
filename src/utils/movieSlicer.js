import { createSlice } from "@reduxjs/toolkit";

const movieSlicer = createSlice({
  name: "Movie",
  initialState: {
    movieData:null,
    trailerData:null,
    topRated:null,
    upcomingMovie:null,
    popularMovie:null,

  },
  reducers: {
    upComingMovieData: (state, action) => {
      state.movieData = action.payload;
    },
    popularMovieData: (state, action) => {
      state.popularMovie = action.payload;
    },
    topRatedData: (state, action) => {
      state.topRated = action.payload;
    },
    upcomingMovieData: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    trailerMovieData: (state, action) => {
      state.trailerData = action.payload;
    },
   
  },
});

export const { upComingMovieData,popularMovieData,trailerMovieData,topRatedData,upcomingMovieData } = movieSlicer.actions;
export default movieSlicer.reducer;
