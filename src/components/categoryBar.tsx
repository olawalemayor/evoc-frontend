import React from "react";

interface CategoryBarProp {
  categories: string[];
}

export default function CategoryBar({ categories }: CategoryBarProp) {
  return (
    <>
      {categories[0].length > 0 && (
        <div className="category-bar">
          {categories.map((category) => (
            <div className="category-item" key={category}>
              {category.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
