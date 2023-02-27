import { useSelector } from "react-redux";
import Course from "../components/Course";
import CourseForm from "../components/CourseForm";
import "../index.css";

export default function CoursePage() {
  const { items: courses } = useSelector((store) => store.course);

  return (
    <>
      <CourseForm />
      <h3>List of Courses</h3>
      <table>
        {courses.map((c, i) => (
          <Course key={c.id} index={i} name={c.name} />
        ))}
      </table>
    </>
  );
}
