import React from "react";
import "./common.css";

import { CarouselProvider, Slider, Slide } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

interface SliderProps {
  id: string;
  images: ImageProps[];
}

export interface ImageProps {
  id: number;
  title: string;
  url: string;
  text: string;
  slideAction?: {
    text: string;
    action: any;
  };
}

export default function PageSlider({ id, images }: SliderProps) {
  return (
    <div className="slider-wrapper" id={id}>
      <CarouselProvider
        totalSlides={images.length}
        naturalSlideHeight={100}
        naturalSlideWidth={100}
        infinite
        isPlaying
      >
        <Slider>
          {images.map(({ id, url, title, text, slideAction }) => (
            <Slide key={id} index={id}>
              <div className="image-wrapper">
                <img src={url} alt={title} />
                <div className="fade"></div>
              </div>
              <h2>{title}</h2>
              <p className="legend">{text}</p>
              {slideAction && (
                <button onClick={slideAction.action}>{slideAction.text}</button>
              )}
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </div>
  );
}
