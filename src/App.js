import React, { useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";

const App = () => {
  const [activPost, setActivPost] = useState(false);
  const openPostHandler = () => {
    setActivPost(true);
  };
  const closePostHandler = () => {
    setActivPost(false);
  };

  return (
    <div className="App">
      <Header openPostHandler={openPostHandler} />
      <Posts
        activPost={activPost}
        closePostHandler={closePostHandler}
      />
    </div>
  );
};

export default App;
