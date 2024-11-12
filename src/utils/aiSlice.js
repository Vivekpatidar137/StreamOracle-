import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "oracleAI",
  initialState: {
    showAiSearch: false,
    movieNames: null,
    moviesData: null,
  },
  reducers: {
    toggleAiSearchView: (state) => {
      state.showAiSearch = !state.showAiSearch;
    },
    addAiResult: (state, action) => {
      const { movieNames, moviesData } = action.payload;

      state.movieNames = movieNames;
      state.moviesData = moviesData;
    },
  },
});

export const { toggleAiSearchView, addAiResult } = aiSlice.actions;
export default aiSlice.reducer;
