import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../rtk/postsSlice";
import { addfinish } from "../../rtk/finishSlice";
import EditTask from "../../pages/editPost/EditPost";

export default function Post({ post }) {
  const [editPost, setEditPost] = useState(false);

  const dispatch = useDispatch();

  const addToFinish = () => {
    dispatch(addfinish(post));
    dispatch(deletePost(post.id));
  };

  const toggleEditPost = () => {
    setEditPost(!editPost);
  };

  return (
    <>
      <div className="post">
        <div className="post__text">
          <h3 className="post__name-content">{post.name}</h3>
          <p className="post__name-content">{post.content}</p>
        </div>
        <button
          className="post__btn-dlt"
          onClick={() => dispatch(deletePost(post.id))}
        >
          X
        </button>
        <div className="d-flex justify-content-between col-12">
          <button className="post__btns" onClick={addToFinish}>
            Finish
          </button>
          <button className="post__btns" onClick={toggleEditPost}>
            Edit
          </button>
        </div>
      </div>
      {editPost && (
        <EditTask
          toggleEditPost={toggleEditPost}
          id={post.id}
          Name={post.name}
          content={post.content}
        />
      )}
    </>
  );
}
