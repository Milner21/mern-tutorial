import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import Content from "../components/Content";

import "../css/DashboardCss.css";
import Spinner from "../components/Spinner";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <div className="card welcome">
          <div className="card-header">
            <h1>Bienvenido {user && user.name}</h1>
          </div>
          <p>Goals Dashboard</p>
        </div>
      </section>
      <section className="form">
        <div className="card">
          <GoalForm />
        </div>
      </section>
      <section className="container">
        <Content />
      </section>
    </>
  );
}

export default Dashboard;
