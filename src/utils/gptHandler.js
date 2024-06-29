import { createSlice } from "@reduxjs/toolkit";

const gptHandler = createSlice({
  name: "GPT",
  initialState: {
<<<<<<< HEAD
<<<<<<< HEAD
    gptValue:false,
    movieName:null,
    movieResult:null


=======
    gptValue:false
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
    gptValue:false
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
  },
  reducers: {
    gptSearch: (state) => {
       state.gptValue = !state.gptValue
    },
<<<<<<< HEAD
<<<<<<< HEAD
    gptMovieResult: (state,actions) => {
      const {movieName,movieResult} = actions.payload
      state.movieName = movieName
      state.movieResult = movieResult
   },
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
    
  },
});

export default gptHandler.reducer;
<<<<<<< HEAD
<<<<<<< HEAD
export const { gptSearch,gptMovieResult } = gptHandler.actions;
=======
export const { gptSearch } = gptHandler.actions;
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
=======
export const { gptSearch } = gptHandler.actions;
>>>>>>> 17b776dcebb4c8597f60d42b112b1bc29c5a61a9
