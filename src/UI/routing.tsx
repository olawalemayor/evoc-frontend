import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import "../pages/pages.css";

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
