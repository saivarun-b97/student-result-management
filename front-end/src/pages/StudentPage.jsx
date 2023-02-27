import React from "react";
import { useSelector } from "react-redux";
import Student from "../components/Student";
import StudentForm from "../components/StudentForm";
import "../index.css";

export default function StudentPage() {
  const { items: students } = useSelector((store) => store.student);

  return (
    <>
      <StudentForm />
      <h3>List of Students</h3>
      <table>
        {students.map((s, i) => (
          <Student index={i} firstName={s.firstName} lastName={s.lastName} dob={s.dob} key={s.id} />
        ))}
      </table>
    </>
  );
}
