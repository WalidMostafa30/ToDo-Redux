import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPost } from "../../rtk/postsSlice";

export default function EditTask({ toggleEditPost, id, Name, content }) {
  const [editName, seteditName] = useState(Name);
  const [editContent, seteditContent] = useState(content);

  const onChangeEditName = (e) => {
    seteditName(e.target.value);
  };

  const onChangeEditContent = (e) => {
    seteditContent(e.target.value);
  };

  const dispatch = useDispatch();

  function submitEditHandler(e) {
    e.preventDefault();
    const postData = {
      id: id,
      name: editName,
      content: editContent,
    };

    if (editName.length > 0 && editContent.length > 0) {
      dispatch(editPost(postData));
      toggleEditPost();
    }
  }

  function enterHandler(e) {
    if (e.key === "Enter") {
      submitEditHandler(e);
    }
  }

  return (
    <div className="edit-post d-flex align-items-center justify-content-center">
      <div className="edit-post__BG" onClick={toggleEditPost} />
      <form onSubmit={submitEditHandler} className="edit-post__form">
        <label className="edit-post__label" htmlFor="Name">
          Name
        </label>
        <input
          id="Name"
          type="text"
          onChange={onChangeEditName}
          className="edit-post__input"
          value={editName}
        />
        <label className="edit-post__label" htmlFor="Content">
          Content
        </label>
        <textarea
          id="Content"
          onChange={onChangeEditContent}
          className="edit-post__text-area"
          value={editContent}
          onKeyDown={enterHandler}
        />
        <div className="edit-post__btns">
          <button className="edit-post__btn">Edit</button>
          <div className="edit-post__btn" onClick={toggleEditPost}>
            Close
          </div>
        </div>
      </form>
    </div>
  );
}
