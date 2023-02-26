export default function Result(props) {
  const { studentName, courseName, score } = props;

  return (
    <>
      <div>{studentName}</div>
      <div>{courseName}</div>
      <div>{score}</div>
    </>
  );
}
