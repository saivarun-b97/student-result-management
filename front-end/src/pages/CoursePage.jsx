import { useSelector } from "react-redux";
import Course from "../components/Course";
import CourseForm from "../components/CourseForm";
import Error from "../components/Error";
import "../index.css";

export default function CoursePage() {
  const { items: courses } = useSelector((store) => store.course);
  const caughtError = useSelector((state) => state.error.caughtError);

  return (
    <>
      {caughtError && <Error />}
      <CourseForm />
      <h3>List of Courses</h3>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c, i) => (
            <Course key={c.id} index={i} name={c.name} />
          ))}
        </tbody>
      </table>
    </>
  );
}
