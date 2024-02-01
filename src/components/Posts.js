import React, { useEffect, useState } from "react";
import "../css/posts.css";
import Post from "./Post";
import AddNewPost from "./AddNewPost";
import axios from "axios";

export default function Posts({ activPost, closePostHandler }) {
  const [posts, setPosts] = useState([]);
  const [islouding, setIslouding] = useState(false);
  // function addPostHandler(postData) {
  //   setPosts((newData) => [...newData, postData]);
  // }
  async function getAllData() {
    try {
      const { data } = await axios.get("http://localhost:9000/posts");
      setPosts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllData();
  }, [islouding]);

  return (
    <div className="posts d-flex align-items-center justify-content-center flex-wrap gap-3 py-3 px-5">
      {activPost && (
        <AddNewPost
          closePostHandler={closePostHandler}
          setIslouding={setIslouding}
          // addPostHandler={addPostHandler}
        />
      )}
      {islouding ? (
        <h1>louding...</h1>
      ) : posts.length > 0 ? (
        posts.map((post, index) => {
          return (
            <Post
              key={post.id}
              Name={post.name}
              content={post.content}
              id={post.id}
              setIslouding={setIslouding}
            />
          );
        })
      ) : (
        <h1>No Posts yet...</h1>
      )}
    </div>
  );
}
