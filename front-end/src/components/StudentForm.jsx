import { useDispatch } from "react-redux";
import { RESOURCE } from "../constants";
import useInput from "../hooks/use-input";
import "../index.css";
import { addResource } from "../store/actions";

export default function StudentForm() {
  const dispatch = useDispatch();

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    isTouched: firstNameIsTouched,
    onChange: onFirstNameChange,
    onBlur: onFirstNameBlur,
  } = useInput((value) => {
    return value.trim().length > 2;
  });

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    isTouched: lastNameIsTouched,
    onChange: onLastNameChange,
    onBlur: onLastNameBlur,
  } = useInput((value) => {
    return value.trim().length > 0;
  });

  const {
    value: dobValue,
    isValid: dobIsValid,
    isTouched: dobIsTouched,
    onChange: onDobChange,
    onBlur: onDobBlur,
  } = useInput(
    (value) => /^\d{4}-\d{2}-\d{2}$/.test(value) && Date.parse(value) < new Date().getTime()
  );

  const submitFormHandler = (event) => {
    event.preventDefault();

    dispatch(
      addResource(RESOURCE.STUDENT, {
        firstName: firstNameValue,
        lastName: lastNameValue,
        dob: dobValue,
      })
    );
  };

  return (
    <>
      <h3>Add New Student</h3>
      <form onSubmit={submitFormHandler}>
        <label>First Name:</label>
        <input
          type={"text"}
          value={firstNameValue}
          placeholder="JOHN"
          onBlur={onFirstNameBlur}
          onChange={onFirstNameChange}
          className={firstNameIsTouched && !firstNameIsValid ? "error" : ""}
        ></input>
        <label>Last Name:</label>
        <input
          type={"text"}
          value={lastNameValue}
          placeholder="DOE"
          onBlur={onLastNameBlur}
          onChange={onLastNameChange}
          className={lastNameIsTouched && !lastNameIsValid ? "error" : ""}
        ></input>
        <label>Date of Birth:</label>
        <input
          type={"text"}
          value={dobValue}
          placeholder="YYYY-MM-DD"
          onBlur={onDobBlur}
          onChange={onDobChange}
          className={dobIsTouched && !dobIsValid ? "error" : ""}
        ></input>
        <button type="submit" disabled={!(firstNameIsValid && lastNameIsValid && dobIsValid)}>
          SAVE
        </button>
      </form>
    </>
  );
}
