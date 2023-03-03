import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./alert-slice";
import courseSlice from "./course-slice";
import resultSlice from "./result-slice";
import studentSlice from "./student-slice";

const store = configureStore({
  reducer: {
    course: courseSlice.reducer,
    student: studentSlice.reducer,
    result: resultSlice.reducer,
    alert: alertSlice.reducer,
  },
});

export default store;
