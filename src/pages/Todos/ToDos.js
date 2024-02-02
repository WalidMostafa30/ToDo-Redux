import React from "react";
import Post from "../../components/post/Post";
import { useSelector } from "react-redux";

export default function ToDos() {
  const state = useSelector((state) => state.posts);

  return (
    <div className="ToDos">
      <h1 className="ToDos__title">ToDo</h1>
      <div className="ToDos__container">
        {state.length > 0 ? (
          state.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        ) : (
          <h1 className="ToDos__no-post">No Post... Add Some</h1>
        )}
      </div>
    </div>
  );
}
