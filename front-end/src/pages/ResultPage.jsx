import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Result from "../components/Result";
import { addResult } from "../store/result-actions";

export default function ResultPage() {
  const dispatch = useDispatch();

  const results = useSelector((state) => state.result.items);
  const students = useSelector((state) => state.student.items);
  const courses = useSelector((state) => state.course.items);
  const scores = ["A", "B", "C", "D", "E", "F"];

  const [studentId, setStudentId] = useState();
  const [courseId, setCourseId] = useState();
  const [score, setScore] = useState();

  const selectStudent = (event) => {
    setStudentId(event.target.value);
  };

  const selectCourse = (event) => {
    setCourseId(event.target.value);
  };

  const selectScore = (event) => {
    setScore(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(addResult({ studentId, courseId, score }));
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <h1>Assign Result</h1>
        <select name="studentId" value={studentId} onChange={selectStudent}>
          {students.map((s, i) => (
            <option key={i} value={s.id}>
              {s.firstName} {s.lastName}
            </option>
          ))}
        </select>
        <select name="courseId" value={courseId} onChange={selectCourse}>
          {courses.map((c, i) => (
            <option key={i} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select name="score" value={score} onChange={selectScore}>
          {scores.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>List of Results</h1>
        {results.map((r) => (
          <Result
            key={r.id}
            studentName={r.studentName}
            courseName={r.courseName}
            score={r.score}
          />
        ))}
      </div>
    </>
  );
}
