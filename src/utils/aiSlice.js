import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "oracleAI",
  initialState: {
    showAiSearch: false,
    movieNames: null,
    moviesData: null,
    loading: false,
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

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { toggleAiSearchView, addAiResult, setLoading } = aiSlice.actions;
export default aiSlice.reducer;
