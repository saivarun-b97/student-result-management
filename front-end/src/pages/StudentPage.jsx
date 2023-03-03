import React from "react";
import { useSelector } from "react-redux";
import Alert from "../components/Alert";
import Student from "../components/Student";
import StudentForm from "../components/StudentForm";

export default function StudentPage() {
  const { items: students } = useSelector((store) => store.student);
  const isAlerted = useSelector((state) => state.alert.isAlerted);

  return (
    <>
      {isAlerted && <Alert />}
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
