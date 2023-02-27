import { BE_BASE_URL, RESOURCE } from "../constants";
import { courseActions } from "./course-slice";
import { resultActions } from "./result-slice";
import { studentActions } from "./student-slice";

export function loadResources() {
  return async (dispatch) => {
    const [getCourseRes, getStudentRes, getResultRes] = await Promise.all(
      Object.values(RESOURCE).map((r) => fetch(`${BE_BASE_URL}/${r}`))
    );

    if (!(getCourseRes.ok && getStudentRes.ok && getResultRes.ok))
      throw new Error(`Could not retrieve all resources`);

    const [courses, students, results] = await Promise.all([
      getCourseRes.json(),
      getStudentRes.json(),
      getResultRes.json(),
    ]);

    dispatch(courseActions.load(courses));
    dispatch(studentActions.load(students));
    dispatch(resultActions.load(results));
  };
}

export function addResource(resource, resourceBody) {
  return async (dispatch) => {
    if (!Object.values(RESOURCE).includes(resource))
      throw new Error("Supplied invalid resource to add");

    const addResourceRes = await fetch(`${BE_BASE_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(resourceBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!addResourceRes.ok) throw new Error(`Could not add ${resource}`);

    const addedResource = await addResourceRes.json();

    switch (resource) {
      case RESOURCE.COURSE:
        dispatch(courseActions.add(addedResource));
        break;
      case RESOURCE.STUDENT:
        dispatch(studentActions.add(addedResource));
        break;
      case RESOURCE.RESULT:
        dispatch(resultActions.add(addedResource));
        break;
      default:
        break;
    }
  };
}
