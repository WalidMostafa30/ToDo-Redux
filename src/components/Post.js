import React, { useState } from "react";
import "../css/post.css";
import axios from "axios";
import EditPost from "./EditPost";

export default function Post({ Name, content, id, setIslouding }) {
  const [editName, seteditName] = useState("");
  const openEditHandler = () => {
    seteditName(true);
  };
  const closeEditHandler = () => {
    seteditName(false);
  };
  async function deletePostHandler() {
    setIslouding(true);
    // eslint-disable-next-line no-unused-vars
    const res = await axios.delete(`http://localhost:9000/posts/${id}`);
    setIslouding(false);
  }
  return (
    <>
      <div className="post d-flex flex-column align-items-center p-3">
        <h3 className="post__name">
          {Name.length <= 10 ? Name : Name.slice(0, 10) + "..."}
        </h3>
        <p className="post__content">
          {content.length <= 30 ? content : content.slice(0, 30) + "..."}
        </p>
        <div className="d-flex justify-content-between col-12">
          <button className="btn btn-primary" onClick={openEditHandler}>
            Edit Post
          </button>
          <button className="btn btn-danger" onClick={deletePostHandler}>
            X
          </button>
        </div>
      </div>
      {editName && (
        <EditPost
          closeEditHandler={closeEditHandler}
          id={id}
          setIslouding={setIslouding}
          Name={Name}
          content={content}
        />
      )}
    </>
  );
}
