export default function Student(props) {
  const { firstName, lastName, dob } = props;

  return (
    <>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{dob}</div>
    </>
  );
}
