import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Mentoring from "./pages/MentoringPage";
import Header from "./components/common/header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mentor" element={<Mentoring />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
