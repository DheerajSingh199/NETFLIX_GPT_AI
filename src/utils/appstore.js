import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlicer";
import gptReducer from "./gptHandler";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,


  },
});


export default appStore