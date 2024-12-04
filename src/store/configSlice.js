import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    error: null,
    isLoading: null,
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
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { changeLang, changeError, removeError, changeIsLoading } =
  configSlice.actions;
export default configSlice.reducer;
