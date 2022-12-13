import { useState } from "react";

import { useDispatch } from "react-redux";

import { createGoal } from "../features/goals/goalSlice";

import "../css/GoalFormCss.css";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section id="form" className="w-100">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="text"
            name="text"
            value={text}
            placeholder={"ingrese su texto"}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block btn-primary">
            Agregar
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
