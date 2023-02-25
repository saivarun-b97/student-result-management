import { BE_BASE_URL } from "../constants";
import { courseActions } from "./course-slice";

export function loadCourses() {
  return async (dispatch) => {
    const getCoursesRes = await fetch(`${BE_BASE_URL}/course`);

    if (!getCoursesRes.ok) throw new Error("Could not retrieve courses");

    const courses = await getCoursesRes.json();

    dispatch(courseActions.load(courses));
  };
}

export function addCourse(courseBody) {
  return async (dispatch) => {
    const addCourseRes = await fetch(`${BE_BASE_URL}/course`, {
      method: "POST",
      body: JSON.stringify(courseBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!addCourseRes.ok) throw new Error("Could not add course");

    const course = await addCourseRes.json();

    dispatch(courseActions.add(course));
  };
}
