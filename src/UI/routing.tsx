import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductPage, CategoryPage, Home } from "../pages";
import "../pages/pages.css";

export default function Routing() {
  return (
    <main>
      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}
