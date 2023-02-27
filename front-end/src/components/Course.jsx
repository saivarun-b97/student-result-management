import "../index.css";

export default function Course(props) {
  const { index, name } = props;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
    </tr>
  );
}
