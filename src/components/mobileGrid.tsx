import React from "react";
import MobileHeroSlide from "../common/mobileSlide";
import { ProductSlideProps } from "../models/product";
import GridContext from "../context/gridContext";

export default function MobileHeroGrid({ products }: ProductSlideProps) {
  return (
    <>
      {products[0].id > 0 && (
        <GridContext.Consumer>
          {({ sectionTitle }) => (
            <div className="mobile-grid hide-desktop hero-grids">
              <h3 className="section-title">{sectionTitle}</h3>
              <div className="hero-product-slide">
                <MobileHeroSlide products={products} />
              </div>
              <button className="more-btn">See more</button>
            </div>
          )}
        </GridContext.Consumer>
      )}
    </>
  );
}
