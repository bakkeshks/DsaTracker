// Header.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import ViewQuestion from "./ViewQuestion";
import AddQuestion from "./AddQuestion";
const Header = () => {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/addquestion" element={<AddQuestion />} />
        <Route path="/" element={<Home />} />
        <Route path="viewquestion" element={<ViewQuestion />} />
      </Routes>
    </>
  );
};

export default Header;
