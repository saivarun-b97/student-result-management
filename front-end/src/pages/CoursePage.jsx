import { useSelector } from "react-redux";
import Alert from "../components/Alert";
import Course from "../components/Course";
import CourseForm from "../components/CourseForm";

export default function CoursePage() {
  const { items: courses } = useSelector((store) => store.course);
  const isAlerted = useSelector((state) => state.alert.isAlerted);

  return (
    <>
      {isAlerted && <Alert />}
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
