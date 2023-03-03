import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: { isAlerted: false, isError: false, alertTitle: "", alertMessage: "" },
  reducers: {
    reset(state) {
      state.isAlerted = false;
      state.isError = false;
      state.alertTitle = "";
      state.alertMessage = "";
    },
    alert(state, action) {
      const { isError, alertTitle, alertMessage } = action.payload;

      state.isAlerted = true;
      state.isError = isError ?? false;
      state.alertTitle = alertTitle;
      state.alertMessage = alertMessage;
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice;
