import { useDispatch } from "react-redux";
import { RESOURCE } from "../constants";
import useInput from "../hooks/use-input";
import "../index.css";
import { addResource } from "../store/actions";

export default function CourseForm() {
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

  const formSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(addResource(RESOURCE.COURSE, { name: courseNameValue }));
  };

  return (
    <>
      <h3>Add New Course</h3>
      <form onSubmit={formSubmitHandler}>
        <label>Course Name:</label>
        <input
          type={"text"}
          value={courseNameValue}
          onBlur={onCourseNameBlur}
          onChange={onCourseNameChange}
          className={courseNameIsTouched && !courseNameIsValid ? "error" : ""}
        ></input>
        <button type="submit" disabled={!courseNameIsValid}>
          SAVE
        </button>
      </form>
    </>
  );
}
