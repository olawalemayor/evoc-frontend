import React from "react";
import { NavLink } from "react-router-dom";

interface CategoryBarProp {
  categories: string[];
}

export default function CategoryBar({ categories }: CategoryBarProp) {
  return (
    <>
      {categories[0] && (
        <div className="category-bar">
          {categories.map((category) => (
            <NavLink
              to={"category/" + category}
              className="category-item"
              key={category}
            >
              {category.toUpperCase()}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
