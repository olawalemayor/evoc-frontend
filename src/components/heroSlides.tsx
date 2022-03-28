import React from "react";
import ProductSlide from "../common/productSlide";
import { ProductSlideProps } from "../models/product";
import GridContext from "../context/gridContext";
import { NavLink } from "react-router-dom";

export default function HeroSlides({ products }: ProductSlideProps) {
  return (
    <GridContext.Consumer>
      {({ gridClass, sectionTitle, gridWidth, category }) => (
        <>
          {products && (
            <div
              className={"desktop-grid hide-mobile " + gridClass}
              style={{ width: `${gridWidth}%` }}
            >
              <div className="section-title">
                <h3>{sectionTitle}</h3>
                <div>
                  <NavLink
                    to={"/category/" + category}
                    className="home-more-btn"
                  >
                    see more
                  </NavLink>
                </div>
              </div>
              <div className="hero-product-slide">
                <ProductSlide products={products} />
              </div>
            </div>
          )}
        </>
      )}
    </GridContext.Consumer>
  );
}
