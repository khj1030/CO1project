import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./components/signup/Signup";
import Signin1 from "./components/signin/Signin1";
import Signin2 from "./components/signin/Signin2";
import Signin3 from "./components/signin/Signin3";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin1" element={<Signin1/>}/>
        <Route path="/signin2" element={<Signin2/>}/>
        <Route path="/signin3" element={<Signin3/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
