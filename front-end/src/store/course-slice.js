import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: { items: [] },
  reducers: {
    load(state, action) {
      state.items = action.payload ?? [];
    },
    add(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const courseActions = courseSlice.actions;

export default courseSlice;
