import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import "../css/GoalItemCss.css";
import { FaTrashAlt } from "react-icons/fa";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div className="d-flex justify-content-between">
        <div className="fecha">
          Creado el {new Date(goal.createdAt).toLocaleString("es-ES")}
        </div>
        <button
          onClick={() => dispatch(deleteGoal(goal._id))}
          className="button"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-title="Tooltip on left"
        >
          <span>
            <FaTrashAlt />
          </span>
        </button>
      </div>

      <h2>{goal.text}</h2>
    </div>
  );
}

export default GoalItem;
