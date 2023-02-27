import { useDispatch, useSelector } from "react-redux";
import { RESOURCE } from "../constants";
import useInput from "../hooks/use-input";
import "../index.css";
import { addResource } from "../store/actions";

export default function ResultForm() {
  const dispatch = useDispatch();

  const students = useSelector((state) => state.student.items);
  const courses = useSelector((state) => state.course.items);
  const scores = ["A", "B", "C", "D", "E", "F"];

  const validationRule = (value) => !!value.trim().length;

  const {
    value: courseIdValue,
    isValid: courseIdIsValid,
    isTouched: courseIdIsTouched,
    onChange: onCourseIdChange,
    onBlur: onCourseIdBlur,
  } = useInput(validationRule);

  const {
    value: studentIdValue,
    isValid: studentIdIsValid,
    isTouched: studentIdIsTouched,
    onChange: onStudentIdChange,
    onBlur: onStudentIdBlur,
  } = useInput(validationRule);

  const {
    value: scoreValue,
    isValid: scoreIsValid,
    isTouched: scoreIsTouched,
    onChange: onScoreChange,
    onBlur: onScoreBlur,
  } = useInput(validationRule);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(
      addResource(RESOURCE.RESULT, {
        studentId: studentIdValue,
        courseId: courseIdValue,
        score: scoreValue,
      })
    );
  };

  return (
    <>
      <h3>Assign New Result</h3>
      <form onSubmit={formSubmitHandler}>
        <label>Student:</label>
        <select
          name="studentId"
          onBlur={onStudentIdBlur}
          onChange={onStudentIdChange}
          className={studentIdIsTouched && !studentIdIsValid ? "error" : ""}
        >
          {students.map((s, i) => (
            <option key={i} value={s.id}>
              {s.firstName} {s.lastName}
            </option>
          ))}
        </select>
        <label>Course:</label>
        <select
          name="courseId"
          onBlur={onCourseIdBlur}
          onChange={onCourseIdChange}
          className={courseIdIsTouched && !courseIdIsValid ? "error" : ""}
        >
          {courses.map((c, i) => (
            <option key={i} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <label>Score:</label>
        <select
          name="score"
          onBlur={onScoreBlur}
          onChange={onScoreChange}
          className={scoreIsTouched && !scoreIsValid ? "error" : ""}
        >
          {scores.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button type="submit" disabled={!(studentIdIsValid && courseIdIsValid && scoreIsValid)}>
          SAVE
        </button>
      </form>
    </>
  );
}
