import { Link } from "react-router-dom";
import "../index.css";

export default function NavigationBar() {
  return (
    <nav>
      <ul>
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
