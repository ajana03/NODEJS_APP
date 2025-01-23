import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggle: false,
    gptResultMovies: null,
    isGptError: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.toggle = !state.toggle;
    },
    addRecommendateMovies: (state, action) => {
      state.gptResultMovies = action.payload;
    },
    removeRecommendedMovies: (state) => {
      state.gptResultMovies = null;
    },
    changeGptError(state, action) {
      state.isGptError = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addRecommendateMovies,
  removeRecommendedMovies,
  changeGptError,
} = gptSlice.actions;
export default gptSlice.reducer;
