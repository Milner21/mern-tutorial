import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

import Spinner from "../components/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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

    if (password !== password2) {
      toast.error("Los password no coinciden");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container text-center pt-2">
        <section className="heading">
          <h1>
            <FaUser /> Registro
          </h1>
          <h4>Crear una cuenta</h4>
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="row justify-content-md-center">
              <div className="col-md-6">
                <div className="form-group m-2">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    placeholder={"ingrese su nombre"}
                    onChange={handleInputChange}
                  />
                </div>
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
                <div className="form-group m-2">
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    name="password2"
                    value={password2}
                    placeholder={"confirma su password"}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-block btn-primary btn-lg "
                  >
                    REGISTRAR
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

export default Register;
