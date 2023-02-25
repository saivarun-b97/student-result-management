import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    items: [],
  },
  reducers: {
    load(state, action) {
      state.items = action.payload ?? [];
    },
    add(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const studentActions = studentSlice.actions;

export default studentSlice;
