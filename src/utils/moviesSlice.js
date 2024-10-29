import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieTrailer: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTrailer,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
