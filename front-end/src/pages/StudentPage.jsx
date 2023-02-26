import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Student from "../components/Student";
import { addStudent, loadStudents } from "../store/student-actions";

let initalLoad = true;

export default function StudentPage() {
  const dispatch = useDispatch();
  const { items: students } = useSelector((store) => store.student);

  useEffect(() => {
    if (initalLoad) {
      initalLoad = false;
      dispatch(loadStudents());
    }
  }, [dispatch]);

  const [firstNameValue, setFirstName] = useState("");

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const [lastNameValue, setLastName] = useState("");

  const updateLastName = (event) => {
    setLastName(event.target.value);
  };

  const [dobValue, setDob] = useState("");

  const updateDob = (event) => {
    setDob(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(
      addStudent({
        firstName: firstNameValue,
        lastName: lastNameValue,
        dob: dobValue,
      })
    );
  };

  return (
    <>
      <form onSubmit={submitFormHandler}>
        <h1>Add New Student</h1>
        <label>Student Name</label>
        <input
          type={"text"}
          name={"firstName"}
          value={firstNameValue}
          placeholder="First Name"
          onChange={updateFirstName}
        ></input>
        <input
          type={"text"}
          name={"lastName"}
          value={lastNameValue}
          placeholder="Last Name"
          onChange={updateLastName}
        ></input>
        <input type={"date"} name={"dob"} value={dobValue} onChange={updateDob}></input>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>List of Students</h1>
        {students.map((s) => (
          <Student firstName={s.firstName} lastName={s.lastName} dob={s.dob} key={s.id} />
        ))}
      </div>
    </>
  );
}
