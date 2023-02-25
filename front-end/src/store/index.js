import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./course-slice";
import studentSlice from "./student-slice";

const store = configureStore({
  reducer: { course: courseSlice.reducer, student: studentSlice.reducer },
});

export default store;
