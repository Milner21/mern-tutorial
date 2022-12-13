import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGoals } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";
import Spinner from "../components/Spinner";

function Content() {
  const dispatch = useDispatch();
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getGoals());

  }, [isError, message, dispatch, goals]);

  if(isLoading){
    <Spinner/>
  }

 
  return (
    <>
      {goals?.length > 0 ? (
        <div className="goals">
          {goals.map((goal) => (
            <GoalItem key={goal._id} goal={goal} />
          ))}
        </div>
      ) : (
        <div className="sinItem">
          <div className="card">
            <h3>No se tiene ningun registro</h3>
          </div>
        </div>
      )}
    </>
  );
}

export default Content;
