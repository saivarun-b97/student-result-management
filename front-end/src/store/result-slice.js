import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: { items: [] },
  reducers: {
    load(state, action) {
      const transformedItems = action.payload.map((i) => {
        return {
          id: i.id,
          studentName: `${i.student.firstName} ${i.student.lastName}`,
          courseName: i.course.name,
          score: i.score,
        };
      });
      state.items = transformedItems;
    },
    add(state, action) {
      const transformedItem = {
        id: action.payload.id,
        studentName: `${action.payload.student.firstName} ${action.payload.student.lastName}`,
        courseName: action.payload.course.name,
        score: action.payload.score,
      };
      state.items.push(transformedItem);
    },
  },
});

export const resultActions = resultSlice.actions;

export default resultSlice;
