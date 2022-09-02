import { Link } from "react-router-dom";
import "../style/Components/Navigation.css";

export function Navigation() {
  return (
    <nav className="Navbar">
      <span id="brand">
        <Link to="/">sandbox</Link>
      </span>
      <ul>
        <li>
          <Link to="/nester">Нестер</Link>
        </li>
        <li>
          <Link to="/mailHelper">Хелпер</Link>
        </li>
      </ul>
    </nav>
  );
}
