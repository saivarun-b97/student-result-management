import { BE_BASE_URL } from "../constants";
import { studentActions } from "./student-slice";

export function loadStudents() {
  return async (dispatch) => {
    const getStudentRes = await fetch(`${BE_BASE_URL}/student`);

    if (!getStudentRes.ok) throw new Error("Could not retrieve students");

    const students = await getStudentRes.json();

    dispatch(studentActions.load(students));
  };
}

export function addStudent(studentBody) {
  return async (dispatch) => {
    const addStudentRes = await fetch(`${BE_BASE_URL}/student`, {
      method: "POST",
      body: JSON.stringify(studentBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!addStudentRes.ok) throw new Error("Could not add student");

    const student = await addStudentRes.json();

    dispatch(studentActions.add(student));
  };
}
