import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/course">Course</Link>
        </li>
        <li>
          <Link to="/student">Student</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
      </ul>
    </nav>
  );
}
