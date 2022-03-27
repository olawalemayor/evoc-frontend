import React from "react";

interface GridProps {
  sectionTitle: string;
  singleBoxWidth: number;
  singleBoxHeight: number;
  gridClass: string;
  gridWidth: number;
  visibleProducts: number;
  category?: string;
}

const GridContext = React.createContext<GridProps>({
  gridClass: "",
  gridWidth: 0,
  sectionTitle: "",
  singleBoxWidth: 0,
  singleBoxHeight: 0,
  visibleProducts: 0,
  category: "",
});

GridContext.displayName = "GridContext";

export default GridContext;
