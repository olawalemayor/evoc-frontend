import React from "react";

interface SectionSliderProps {
  images: SectionImages[];
}

interface SectionImages {
  id: string;
  url: string;
  title: string;
  text: string;
  slideAction: {
    action: any;
    text: string;
  };
}

export default function SectionSlider({ images }: SectionSliderProps) {
  return (
    <div>
      {images.map(({ id, url, title, text, slideAction }) => (
        <div key={id}>
          <div className="slide-image">
            <img src={url} alt={title} />
          </div>
          <div className="title">{title}</div>
          <p className="text">{text}</p>
          <button onClick={slideAction.action}>{slideAction.text}</button>
        </div>
      ))}
    </div>
  );
}
