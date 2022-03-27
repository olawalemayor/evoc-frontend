import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "./productSlide.css";
import GridContext from "../context/gridContext";
import { ProductSlideProps } from "../models/product";

export default function MobileHeroSlide({ products }: ProductSlideProps) {
  return (
    <GridContext.Consumer>
      {({ singleBoxHeight, singleBoxWidth, visibleProducts }) => (
        <div className="mobile-hero-slide">
          <CarouselProvider
            totalSlides={products.length}
            naturalSlideHeight={singleBoxHeight}
            naturalSlideWidth={singleBoxWidth}
            visibleSlides={visibleProducts}
            isPlaying
            infinite
          >
            <Slider>
              {products.map(({ id, image, price, category, title }) => (
                <Slide index={id} key={id} className="product-slide">
                  <div>
                    <img src={image} alt={title} />
                  </div>
                  <span>{category.toUpperCase()}</span>
                  <h4 className="product-title">{title}</h4>
                  <div className="slide-action">
                    <div className="price">${price}</div>
                    <button className="add-cart-btn">Add to Cart</button>
                  </div>
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
      )}
    </GridContext.Consumer>
  );
}
