import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Course from "../components/Course";
import { addCourse } from "../store/course-actions";

export default function CoursePage() {
  const dispatch = useDispatch();
  const { items: courses } = useSelector((store) => store.course);

  const [courseNameValue, setCourseName] = useState();

  const updateCourseName = (event) => {
    setCourseName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addCourse({ name: courseNameValue }));
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <h1>Create New Course</h1>
        <label>Course Name</label>
        <input
          type={"text"}
          name={"name"}
          value={courseNameValue}
          onChange={updateCourseName}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>List of Courses</h1>
        {courses.map((c) => (
          <Course key={c.id} name={c.name} />
        ))}
      </div>
    </>
  );
}
