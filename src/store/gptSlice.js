import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggle: false,
    gptResultMovies: null,
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
  },
});

export const {
  toggleGptSearchView,
  addRecommendateMovies,
  removeRecommendedMovies,
} = gptSlice.actions;
export default gptSlice.reducer;
