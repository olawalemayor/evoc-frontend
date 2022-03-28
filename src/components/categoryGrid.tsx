import React from "react";
import { NavLink } from "react-router-dom";
import { ProductModel } from "../models/product";

interface categoryGridProps {
  products: ProductModel[];
}

export default function CategoryGrid({ products }: categoryGridProps) {
  return (
    <div className="grid-box">
      {products &&
        products.map(({ description, id, image, price, rating, title }) => (
          <NavLink to={"/product/" + id} key={id}>
            <div className="category-block">
              <div className="product-image">
                <img src={image} alt={title} />
              </div>
              <div className="product-details">
                <h4 className="product-title">{title}</h4>
                <p className="product-description">{description}</p>
                {rating.count > 1 && (
                  <div>
                    Rated {rating.rate} by {rating.count} people
                  </div>
                )}
                <p>${price}</p>
              </div>
            </div>
          </NavLink>
        ))}
    </div>
  );
}
