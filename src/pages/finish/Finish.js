import React from "react";
import Finished from "../../components/finished/Finished";
import { useSelector } from "react-redux";

export default function Finish() {
  const finishState = useSelector((state) => state.finish);

  return (
    <div className="finish">
      <h1 className="finish__title">Finish</h1>
      <div className="finish__container">
        {finishState.length > 0 ? (
          finishState.map((finish) => {
            return <Finished key={finish.id} finish={finish} />;
          })
        ) : (
          <h1 className="finish__no-finish">No Tasks Finished Yet..</h1>
        )}
      </div>
    </div>
  );
}
