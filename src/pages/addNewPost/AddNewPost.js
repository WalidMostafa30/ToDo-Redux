import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../rtk/postsSlice";

export default function AddNewPost() {
  const [inputName, setInputName] = useState("");
  const [inputContent, setInputContent] = useState("");
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setInputName(e.target.value);
  };

  const onChangeContent = (e) => {
    setInputContent(e.target.value);
  };

  const inpt = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inpt.current.focus();
  }, []);

  function postData() {
    const postData = {
      name: inputName,
      content: inputContent,
      id: Math.random(),
    };
    dispatch(addPost(postData));
  }
  function submitHandler(e) {
    e.preventDefault();
    if (inputName.trim().length > 0 && inputContent.trim().length > 0) {
      postData();
      setInputName("");
      setInputContent("");
      navigate("/");
    }
  }
  function enterHandler(e) {
    if (e.key === "Enter") {
      submitHandler(e);
    }
  }
  return (
    <div className="add-new-post">
      <h1 className="add-new-post__title">Add New Post</h1>
      <form onSubmit={submitHandler} className="add-new-post__form">
        <label className="add-new-post__label" htmlFor="Name">
          Name
        </label>
        <input
          id="Name"
          type="text"
          ref={inpt}
          onChange={onChangeName}
          className="add-new-post__input"
        />
        <label className="add-new-post__label" htmlFor="Content">
          Content
        </label>
        <textarea
          id="Content"
          onChange={onChangeContent}
          className="add-new-post__text-area"
          onKeyDown={enterHandler}
        />
        <div className="add-new-post__btns">
          <button className="add-new-post__btn">Post</button>
        </div>
      </form>
    </div>
  );
}
