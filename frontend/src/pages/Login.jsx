import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";

import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container text-center pt-2">
        <section className="heading">
          <h1>
            <FaSignInAlt /> Iniciar Sesion
          </h1>
          <h4>Ingrese sus datos</h4>
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <div className="form-group m-2">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    placeholder={"ingrese su correo"}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group m-2">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    placeholder={"ingrese su password"}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary btn-lg "
                  >
                    INGRESAR
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
