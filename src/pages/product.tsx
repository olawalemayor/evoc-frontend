import "./product.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../models/product";
import axios from "axios";

export default function ProductPage() {
  const id = useParams().id;

  const [product, setProduct] = useState(new Product());

  const [recentProducts] = useState([new Product()]);

  useEffect(() => {
    axios
      .get(`https://evoc-db.herokuapp.com/products/${id}`)
      .then(({ data }) => setProduct(data));
  }, [setProduct, id]);

  const { category, description, image, price, rating, title } = product;

  return (
    <div className="page-wrapper">
      <div className="product-main">
        <div className="product-main-left">
          <div className="product-main-img">
            <img src={image} alt={title} />
          </div>
          <em>{category.toUpperCase()}</em>
          {rating.count > 1 && (
            <div className="ratings">
              Ratings: {rating.rate} by {rating.count} people
            </div>
          )}
        </div>
        <div className="product-main-right">
          <div className="product-main-details">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="product-main-actions">
            <div>
              <span className="product-price">${price}</span>
            </div>
            <div>
              <input type="number" min={1} max={99} defaultValue={1} />
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="comments">
        <div className="comment-label">Comment:</div>
        <div className="comment-box">
          <textarea
            name="comment"
            id="product-comment"
            cols={50}
            rows={5}
          ></textarea>
        </div>
      </div>
      {recentProducts[0].id > 0 && (
        <div className="recently-viewed">
          <h3>Recently Viewed</h3>
        </div>
      )}
    </div>
  );
}
