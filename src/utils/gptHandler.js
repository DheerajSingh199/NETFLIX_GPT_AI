import { createSlice } from "@reduxjs/toolkit";

const gptHandler = createSlice({
  name: "GPT",
  initialState: {
    gptValue:false,
    movieName:null,
    movieResult:null


  },
  reducers: {
    gptSearch: (state) => {
       state.gptValue = !state.gptValue
    },
    gptMovieResult: (state,actions) => {
      const {movieName,movieResult} = actions.payload
      state.movieName = movieName
      state.movieResult = movieResult
   },
    
  },
});

export default gptHandler.reducer;
export const { gptSearch,gptMovieResult } = gptHandler.actions;
