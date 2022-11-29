import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
        <div className="container">
          <div className="navbar-brand">
            <NavLink className={"navbar-brand"} to="/">
              GoalSetter
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className={"nav-link"} to={"/login"}>
                  <FaSignInAlt /> Iniciar sesion
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to={"/register"}>
                  <FaUser /> Registrarse
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
