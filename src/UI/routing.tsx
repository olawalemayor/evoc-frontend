import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import "../pages/pages.css";
import ProductPage from "../pages/product";
import CategoryPage from "../pages/category";

export default function Routing() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}
