import { useState } from "react";

export default function useInput(validationFunction) {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const onChange = (event) => {
    const updatedValue = event.target.value;

    setValue(updatedValue.toUpperCase());

    setIsValid(validationFunction(updatedValue));
  };

  const onSelect = (event) => {
    const selectedOption = event.target.value;

    setValue(selectedOption);

    setIsValid(validationFunction(selectedOption));
  };

  const onBlur = () => {
    if (!isTouched) setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
    setIsValid(false);
  };

  return {
    value,
    isTouched,
    isValid,
    onChange,
    onSelect,
    onBlur,
    reset,
  };
}
