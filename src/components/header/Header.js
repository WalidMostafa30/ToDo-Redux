import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const finishState = useSelector((state) => state.finish);

  return (
    <div className="header">
      <h1 className="header__title ">To Do List</h1>
      <div className="header__nav">
        <Link to={"/addpost"} className="header__btn header__btn--new-post">
          New Post +
        </Link>
        <Link to={"/"} className="header__btn">
          ToDo
        </Link>
        <Link to={"/finish"} className="header__btn">
          Finish
          {finishState.length > 0 && (
            <p className="finish-num">
              {finishState.length > 9 ? "+9" : finishState.length}
            </p>
          )}
        </Link>
      </div>
    </div>
  );
}
