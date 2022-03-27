import React from "react";
import ProductSlide from "../common/productSlide";
import { ProductSlideProps } from "../models/product";
import GridContext from "../context/gridContext";

export default function HeroSlides({ products }: ProductSlideProps) {
  return (
    <GridContext.Consumer>
      {({ gridClass, sectionTitle, gridWidth }) => (
        <>
          {products[0].id > 0 && (
            <div
              className={"hide-mobile " + gridClass}
              style={{ width: `${gridWidth}%` }}
            >
              <h3 className="section-title">{sectionTitle}</h3>
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
