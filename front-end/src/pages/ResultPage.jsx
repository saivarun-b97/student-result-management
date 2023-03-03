import { useSelector } from "react-redux";
import Alert from "../components/Alert";
import Result from "../components/Result";
import ResultForm from "../components/ResultForm";

export default function ResultPage() {
  const results = useSelector((state) => state.result.items);
  const isAlerted = useSelector((state) => state.alert.isAlerted);

  return (
    <>
      {isAlerted && <Alert />}
      <ResultForm />
      <h3>List of Results</h3>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r, i) => (
            <Result
              key={r.id}
              index={i}
              studentName={r.studentName}
              courseName={r.courseName}
              score={r.score}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
