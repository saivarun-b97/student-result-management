import { useDispatch, useSelector } from "react-redux";
import { RESOURCE } from "../constants";
import useInput from "../hooks/use-input";
import "../index.css";
import { addResource } from "../store/actions";

export default function ResultForm(props) {
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

    dispatch(addResource(RESOURCE.RESULT, { studentIdValue, courseIdValue, scoreValue }));
  };

  return (
    <>
      <h1>Assign Result</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Student</label>
          <select name="studentId" onBlur={onStudentIdBlur} onChange={onStudentIdChange}>
            {students.map((s, i) => (
              <option key={i} value={s.id}>
                {s.firstName} {s.lastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Course</label>
          <select name="courseId" onBlur={onCourseIdBlur} onChange={onCourseIdChange}>
            {courses.map((c, i) => (
              <option key={i} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Score</label>
          <select name="score" onBlur={onScoreBlur} onChange={onScoreChange}>
            {scores.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
