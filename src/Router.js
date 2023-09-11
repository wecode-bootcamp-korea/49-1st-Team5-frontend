import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import JoinDone from "./pages/JoinDone/JoinDone"
import Main from "./pages/Main/Main";
// import Nav from "./components/Nav/Nav";
import JoinInfo from "./pages/JoinInfo/JoinInfo";
import CreateThread from "./pages/Create/CreateThread";
import ModifyThread from "./pages/Modify/ModifyThread";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/joinDone" element={<JoinDone />}></Route>
        <Route path="/joininfo" element={<JoinInfo />}></Route>
        <Route path="/createthread" element={<CreateThread />}></Route>
        <Route path="/modifythread" element={<ModifyThread />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
