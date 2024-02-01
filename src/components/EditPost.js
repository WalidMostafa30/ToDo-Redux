import { useState } from "react";
import "../css/AddNewPost.css";
import axios from "axios";

export default function EditPost({
  closeEditHandler,
  setIslouding,
  id,
  content,
  Name,
}) {
  const [editName, seteditName] = useState(Name);
  const [editContent, seteditContent] = useState(content);
  const onChangeEditName = (e) => {
    seteditName(e.target.value);
  };
  const onChangeEditContent = (e) => {
    seteditContent(e.target.value);
  };
  async function EditData() {
    setIslouding(true);
    // eslint-disable-next-line no-unused-vars
    const res = await axios.put(`http://localhost:9000/posts/${id}`, {
      name: editName,
      content: editContent,
    });
    setIslouding(false);
  }
  function submitEditHandler(e) {
    e.preventDefault();
    if (editName.length > 0 && editContent.length > 0) {
      EditData();
      closeEditHandler();
    }
  }
  function enterHandler(e) {
    if (e.key === "Enter") {
      submitEditHandler(e);
    }
  }

  return (
    <div className="add-new-post d-flex align-items-center justify-content-center">
      <div className="BG" onClick={closeEditHandler} />
      <form
        onSubmit={submitEditHandler}
        className="d-flex flex-column align-items-start bg-light p-4 col-6"
      >
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          type="text"
          onChange={onChangeEditName}
          className="fs-5 col-12"
          value={editName}
        />
        <label htmlFor="Content">Content</label>
        <textarea
          id="Content"
          onChange={onChangeEditContent}
          className="fs-5 col-12"
          value={editContent}
          onKeyDown={enterHandler}
        />
        <div className="form__btns col-12 mt-3 d-flex align-items-center justify-content-between">
          <button className="btn btn-primary">Edit</button>
          <div className="btn btn-danger" onClick={closeEditHandler}>
            Close
          </div>
        </div>
      </form>
    </div>
  );
}
