import { useState } from "react";

export default function useInput(validationFunction) {
  const [value, setValue] = useState();
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const onChange = (event) => {
    const updatedValue = event.target.value;

    setValue(updatedValue.toUpperCase());

    setIsValid(validationFunction(updatedValue));
  };

  const onBlur = () => {
    if (!isTouched) setIsTouched(true);
  };

  return {
    value,
    isTouched,
    isValid,
    onChange,
    onBlur,
  };
}
