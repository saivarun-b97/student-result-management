import { useDispatch } from "react-redux";
import { RESOURCE } from "../constants";
import useInput from "../hooks/use-input";
import "../index.css";
import { addResource } from "../store/actions";

export default function StudentForm(props) {
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
  } = useInput((value) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    if (Date.parse(value) > new Date().getTime()) return false;

    return true;
  });

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
      <h1>Add New Student</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>First Name</label>
          <input
            type={"text"}
            value={firstNameValue}
            placeholder="First Name"
            onBlur={onFirstNameBlur}
            onChange={onFirstNameChange}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type={"text"}
            value={lastNameValue}
            placeholder="Last Name"
            onBlur={onLastNameBlur}
            onChange={onLastNameChange}
          ></input>
        </div>
        <div>
          <label>Date Of Birth</label>
          <input
            type={"text"}
            placeholder="YYYY-MM-DD"
            value={dobValue}
            onBlur={onDobBlur}
            onChange={onDobChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
