export default function Student(props) {
  const { index, firstName, lastName, dob } = props;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{dob}</td>
    </tr>
  );
}
