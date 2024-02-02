import React from "react";
import { deletefinish } from "../../rtk/finishSlice";
import { addPost } from "../../rtk/postsSlice";
import { useDispatch } from "react-redux";

export default function Finished({ finish }) {
  const dispatch = useDispatch();

  const returnToHome = (id, finish) => {
    dispatch(addPost(finish));
    dispatch(deletefinish(id));
  };

  return (
    <div className="finished">
      <div className="finished__text">
        <h3 className="finished__name-content">{finish.name}</h3>
        <p className="finished__name-content">{finish.content}</p>
      </div>
      <button
        className="finished__btn-dlt"
        onClick={() => dispatch(deletefinish(finish.id))}
      >
        X
      </button>
      <div className="d-flex justify-content-center col-12">
        <button
          className="finished__btns"
          onClick={() => returnToHome(finish.id, finish)}
        >
          Return To ToDo
        </button>
      </div>
    </div>
  );
}
