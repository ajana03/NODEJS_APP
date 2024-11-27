import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
  name: "tvSeries",
  initialState: {
    popularTVSeries: null,
    trailer: null,
  },
  reducers: {
    addPopularTVSeries: (state, action) => {
      state.popularTVSeries = action.payload;
    },
    addtrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addPopularTVSeries, addtrailer } = tvSlice.actions;
export default tvSlice.reducer;
