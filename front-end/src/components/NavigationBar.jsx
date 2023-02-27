import { Link } from "react-router-dom";
import "../index.css";

export default function NavigationBar() {
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <Link to="/course">Course Page</Link>
          </li>
          <li>
            <Link to="/student">Student Page</Link>
          </li>
          <li>
            <Link to="/result">Result Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
