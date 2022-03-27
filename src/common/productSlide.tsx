import React from "react";
import "./productSlide.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import { ProductSlideProps } from "../models/product";
import GridContext from "../context/gridContext";

export default function ProductSlide({ products }: ProductSlideProps) {
  return (
    <GridContext.Consumer>
      {({ singleBoxHeight, singleBoxWidth, visibleProducts }) => (
        <div>
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
