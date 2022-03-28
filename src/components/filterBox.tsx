import React from "react";

export default function FilterBox() {
  return (
    <div>
      <h3>FILTER</h3>
      <div className="filter-options">
        <div>
          Option 1 <input type="checkbox" name="filter-option" id="" />
        </div>
        <div>
          Option 2 <input type="checkbox" name="filter-option" id="" />
        </div>
        <div>
          Option 3 <input type="checkbox" name="filter-option" id="" />
        </div>
        <div>
          Option 4 <input type="checkbox" name="filter-option" id="" />
        </div>
        <div>
          Option 5 <input type="checkbox" name="filter-option" id="" />
        </div>
      </div>
    </div>
  );
}
