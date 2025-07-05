import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],    // array of movie objects
    popularMovies: [],       // array of movie objects
    topRated: [],            // array of movie objects
    showMovieVideo: null,    // currently selected movie object
    trailerVideo: null       // currently fetched trailer object for Vidoe
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    updateNewMovieVideo: (state, action) => {
      state.showMovieVideo = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    }
  }
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  updateNewMovieVideo,
  addTrailerVideo
} = moviesSlice.actions;

export default moviesSlice.reducer;