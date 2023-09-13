import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import JoinDone from "./pages/JoinDone/JoinDone";
import Main from "./pages/Main/Main";
// import Nav from "./components/Nav/Nav";
import JoinInfo from "./pages/JoinInfo/JoinInfo";
import CreateThread from "./pages/Create/CreateThread";
import ModifyThread from "./pages/Modify/ModifyThread";
import PostDetail from "./pages/PostDetail/PostDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joindone" element={<JoinDone />} />
        <Route path="/joininfo" element={<JoinInfo />} />
        <Route path="/createthread" element={<CreateThread />} />
        <Route path="/modifythread" element={<ModifyThread />} />
        <Route path="/main/:idx" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
