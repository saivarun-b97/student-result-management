import React from "react";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Student from "../components/Student";
import StudentForm from "../components/StudentForm";
import "../index.css";

export default function StudentPage() {
  const { items: students } = useSelector((store) => store.student);
  const caughtError = useSelector((state) => state.error.caughtError);

  return (
    <>
      {caughtError && <Error />}
      <StudentForm />
      <h3>List of Students</h3>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB (YYYY-MM-DD)</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <Student
              index={i}
              firstName={s.firstName}
              lastName={s.lastName}
              dob={s.dob}
              key={s.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
