import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  action: null,
  comedy: null,
  sports: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.action = action.payload.action;
      state.comedy = action.payload.comedy;
      state.sports = action.payload.sports;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectAction = (state) => state.movie.action;
export const selectComedy = (state) => state.movie.comedy;
export const selectSports = (state) => state.movie.sports;

export default movieSlice.reducer;
