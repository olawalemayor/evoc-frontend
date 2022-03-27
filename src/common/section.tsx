import React from "react";

interface SectionProps {
  title: string;
  images: any[];
}

export default function Section({ images, title }: SectionProps) {
  return (
    <>
      <h3>{title}</h3>
      <div className="section-slider"></div>
    </>
  );
}
