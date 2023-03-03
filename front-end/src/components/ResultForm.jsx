import { useDispatch, useSelector } from "react-redux";
import { RESOURCE } from "../constants";
import useInput from "../hooks/use-input";
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
    onSelect: onCourseIdSelect,
    onBlur: onCourseIdBlur,
    reset: resetCourseId,
  } = useInput(validationRule);

  const {
    value: studentIdValue,
    isValid: studentIdIsValid,
    isTouched: studentIdIsTouched,
    onSelect: onStudentIdSelect,
    onBlur: onStudentIdBlur,
    reset: resetStudentId,
  } = useInput(validationRule);

  const {
    value: scoreValue,
    isValid: scoreIsValid,
    isTouched: scoreIsTouched,
    onSelect: onScoreSelect,
    onBlur: onScoreBlur,
    reset: resetScore,
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

    resetCourseId();
    resetStudentId();
    resetScore();
  };

  return (
    <>
      <h3>Assign New Result</h3>
      <form onSubmit={formSubmitHandler}>
        <label>Student:</label>
        <select
          name="studentId"
          value={studentIdValue}
          onBlur={onStudentIdBlur}
          onChange={onStudentIdSelect}
          className={studentIdIsTouched && !studentIdIsValid ? "error" : ""}
        >
          <option value="">Please choose an option</option>
          {students.map((s, i) => (
            <option key={i} value={s.id}>
              {s.firstName} {s.lastName}
            </option>
          ))}
        </select>
        <label>Course:</label>
        <select
          name="courseId"
          value={courseIdValue}
          onBlur={onCourseIdBlur}
          onChange={onCourseIdSelect}
          className={courseIdIsTouched && !courseIdIsValid ? "error" : ""}
        >
          <option value="">Please choose an option</option>
          {courses.map((c, i) => (
            <option key={i} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <label>Score:</label>
        <select
          name="score"
          value={scoreValue}
          onBlur={onScoreBlur}
          onChange={onScoreSelect}
          className={scoreIsTouched && !scoreIsValid ? "error" : ""}
        >
          <option value="">Please choose an option</option>
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
