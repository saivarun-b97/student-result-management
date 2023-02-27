import { useSelector } from "react-redux";
import Result from "../components/Result";
import ResultForm from "../components/ResultForm";
import "../index.css";

export default function ResultPage() {
  const results = useSelector((state) => state.result.items);

  return (
    <>
      <ResultForm />
      <h3>List of Results</h3>
      <table>
        {results.map((r, i) => (
          <Result
            key={r.id}
            index={i}
            studentName={r.studentName}
            courseName={r.courseName}
            score={r.score}
          />
        ))}
      </table>
    </>
  );
}
