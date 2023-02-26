import { BE_BASE_URL } from "../constants";
import { resultActions } from "./result-slice";

export function loadResults() {
  return async (dispatch) => {
    const getResultsRes = await fetch(`${BE_BASE_URL}/result`);

    if (!getResultsRes.ok) throw new Error("Could not retrieve Results");

    const results = await getResultsRes.json();

    dispatch(resultActions.load(results));
  };
}

export function addResult(resultBody) {
  return async (dispatch) => {
    const addResultRes = await fetch(`${BE_BASE_URL}/result`, {
      method: "POST",
      body: JSON.stringify(resultBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!addResultRes.ok) throw new Error("Could not add Result");

    const result = await addResultRes.json();

    dispatch(resultActions.add(result));
  };
}
