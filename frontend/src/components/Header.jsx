import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout, reset } from "../features/auth/authSlice";
function Header() {
  const navigate = useNavigate();
  const dispatcch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatcch(logout())
    dispatcch(reset())
    navigate('/')
  }

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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {user ? (
                <li className="nav-item active">
                  <NavLink className={"nav-link"} onClick={onLogout}>
                    <FaSignOutAlt /> Cerrar sesion
                  </NavLink>
                </li>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
