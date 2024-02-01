import React from "react";
import "../css/header.css";

export default function Header({ openPostHandler }) {
  return (
    <div className="header d-flex align-items-center justify-content-between py-3 px-5 bg-dark">
      <h1 className="header__title text-light">To Do List</h1>
      <div className="header__btn text-light" onClick={openPostHandler}>
        New Post +
      </div>
    </div>
  );
}
