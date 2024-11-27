import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    error: null,
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    changeError: (state, action) => {
      state.error = action.payload;
    },
    removeError: (state) => {
      state.error = null;
    },
  },
});

export const { changeLang, changeError, removeError } = configSlice.actions;
export default configSlice.reducer;
