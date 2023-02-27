import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: { caughtError: false, errorTitle: "", errorMessage: "" },
  reducers: {
    reset(state) {
      state.caughtError = false;
      state.errorTitle = "";
      state.errorMessage = "";
    },
    caught(state, action) {
      const { errorTitle, errorMessage } = action.payload;

      state.caughtError = true;
      state.errorTitle = errorTitle;
      state.errorMessage = errorMessage;
    },
  },
});

export const errorActions = errorSlice.actions;

export default errorSlice;
