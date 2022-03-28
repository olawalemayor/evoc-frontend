import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../models/product";
import axios from "axios";
import FilterBox from "../components/filterBox";
import CategoryGrid from "../components/categoryGrid";

export default function CategoryPage() {
  const category = useParams().category;

  const [products, setProducts] = useState([new Product()]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/category/${category}`)
      .then((product) => setProducts(product.data));
  }, [setProducts, category]);

  return (
    <div>
      <div className="category-section">
        <div className="filter-box">
          <FilterBox />
        </div>
        <div className="category-grid">
          <CategoryGrid products={products} />
        </div>
      </div>
    </div>
  );
}
