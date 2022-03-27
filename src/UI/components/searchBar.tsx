import React, { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-bar">
      <input
        value={searchTerm}
        placeholder="search for products"
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <button>SEARCH</button>
    </div>
  );
}
