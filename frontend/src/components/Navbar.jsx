import React, { useState } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import "./navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatcch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onClickShow = () => {
    setShow(!show);
  };

  const onLogout = () => {
    dispatcch(logout());
    dispatcch(reset());
    navigate("/");
    onClickShow();
  };

  return (
    <div className="Navbar">
      <div className="leftSide">
        <h5>Logotipo</h5>
      </div>
      <div className="rigthSide">
        <div className="links" id={show ? "hidden" : ""}>
          {user ? (
            <NavLink className="nav-link" onClick={onLogout}>
              <FaSignOutAlt /> Cerrar sesion
            </NavLink>
          ) : (
            <>
              <NavLink className="nav-link" to={"/login"} onClick={onClickShow}>
                <FaSignInAlt /> Iniciar sesion
              </NavLink>

              <NavLink
                className="nav-link"
                to={"/register"}
                onClick={onClickShow}
              >
                <FaUser /> Registrarse
              </NavLink>
            </>
          )}
        </div>
        <div className="wrapper">
          <div
            className="icon nav-icon-1"
            id={show ? "open" : ""}
            onClick={onClickShow}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
