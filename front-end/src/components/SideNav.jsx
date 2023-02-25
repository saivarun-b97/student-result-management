import { Link } from "react-router-dom";
import classes from "./SideNav.module.css";

function SideNav() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
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

export default SideNav;
