import { createSlice } from "@reduxjs/toolkit";

const gptHandler = createSlice({
  name: "GPT",
  initialState: {
    gptValue:false
  },
  reducers: {
    gptSearch: (state) => {
       state.gptValue = !state.gptValue
    },
    
  },
});

export default gptHandler.reducer;
export const { gptSearch } = gptHandler.actions;
