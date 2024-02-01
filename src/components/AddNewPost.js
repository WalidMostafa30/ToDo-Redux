import { useState } from "react";
import "../css/AddNewPost.css";
import axios from "axios";

export default function AddNewPost({
  closePostHandler,
  setIslouding,
  addPostHandler,
}) {
  const [inputName, setInputName] = useState("");
  const [inputContent, setInputContent] = useState("");
  const onChangeName = (e) => {
    setInputName(e.target.value);
  };
  const onChangeContent = (e) => {
    setInputContent(e.target.value);
  };
  async function postData() {
    setIslouding(true);
    // eslint-disable-next-line no-unused-vars
    const res = await axios.post("http://localhost:9000/posts", {
      name: inputName,
      content: inputContent,
    });
    setIslouding(false);
    // const postData = {
    //   name: inputName,
    //   content: inputContent,
    // };
    // addPostHandler(postData);
  }
  function submitHandler(e) {
    e.preventDefault();
    if (inputName.length > 0 && inputContent.length > 0) {
      postData();
      closePostHandler();
    }
  }
  function enterHandler(e) {
    if (e.key === "Enter") {
      submitHandler(e);
    }
  }
  return (
    <div className="add-new-post d-flex align-items-center justify-content-center">
      <div className="BG" onClick={closePostHandler} />
      <form
        onSubmit={submitHandler}
        className="d-flex flex-column align-items-start bg-light p-4 col-6"
      >
        <label htmlFor="Name">Name</label>
        <input
          id="Name"
          type="text"
          onChange={onChangeName}
          className="fs-5 col-12"
        />
        <label htmlFor="Content">Content</label>
        <textarea
          id="Content"
          onChange={onChangeContent}
          className="fs-5 col-12"
          onKeyDown={enterHandler}
        />
        <div className="form__btns col-12 mt-3 d-flex align-items-center justify-content-between">
          <button className="btn btn-primary">Post</button>
          <div className="btn btn-danger" onClick={closePostHandler}>
            Close
          </div>
        </div>
      </form>
    </div>
  );
}
