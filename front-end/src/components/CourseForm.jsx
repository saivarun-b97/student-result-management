import { useDispatch } from "react-redux";
import { RESOURCE } from "../constants";
import useInput from "../hooks/use-input";
import "../index.css";
import { addResource } from "../store/actions";

export default function CourseForm(props) {
  const dispatch = useDispatch();

  const {
    value: courseNameValue,
    isValid: courseNameIsValid,
    isTouched: courseNameIsTouched,
    onChange: onCourseNameChange,
    onBlur: onCourseNameBlur,
  } = useInput((value) => {
    return value.trim().length > 2;
  });

  console.log(courseNameIsValid && courseNameIsTouched);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addResource(RESOURCE.COURSE, { name: courseNameValue }));
  };

  return (
    <>
      <h1>Create New Course</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Course Name</label>
          <input
            type={"text"}
            value={courseNameValue}
            onBlur={onCourseNameBlur}
            onChange={onCourseNameChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
