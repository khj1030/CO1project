import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Mentoring from "./pages/MentoringPage";
import Signup from "./components/signup/Signup";
import Signin1 from "./components/signin/Signin1";
import Signin2 from "./components/signin/Signin2";
import Signin3 from "./components/signin/Signin3";
import Header from "./components/common/header/Header";
import Mypage from "./components/mypage/Mypage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mentor" element={<Mentoring />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin1" element={<Signin1 />} />
        <Route path="/signin2" element={<Signin2 />} />
        <Route path="/signin3" element={<Signin3 />} />
        <Route path="/mypage" element={<Mypage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
