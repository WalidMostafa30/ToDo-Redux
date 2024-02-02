import React from "react";
import "./css/App.css";
import Header from "./components/header/Header";
import Home from "./pages/Todos/ToDos";
import Finish from "./pages/finish/Finish";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewPost from "./pages/addNewPost/AddNewPost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/addpost" element={<AddNewPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
