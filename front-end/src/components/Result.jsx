export default function Result(props) {
  const { index, studentName, courseName, score } = props;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{studentName}</td>
      <td>{courseName}</td>
      <td>{score}</td>
    </tr>
  );
}
