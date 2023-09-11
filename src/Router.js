import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import JoinDone from "./pages/JoinDone/JoinDone"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/joinDone" element={<JoinDone />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
