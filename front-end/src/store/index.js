import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./course-slice";
import errorSlice from "./error-slice";
import resultSlice from "./result-slice";
import studentSlice from "./student-slice";

const store = configureStore({
  reducer: {
    course: courseSlice.reducer,
    student: studentSlice.reducer,
    result: resultSlice.reducer,
    error: errorSlice.reducer,
  },
});

export default store;
