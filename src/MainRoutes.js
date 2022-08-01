import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

import Home from "./components/Home";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default MainRoutes;
