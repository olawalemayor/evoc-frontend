import React from "react";

interface HeaderTileProps {
  Component: any;
  content: string;
}

export default function HeaderTile({ Component, content }: HeaderTileProps) {
  return (
    <div className="header-tile">
      <div className="header-tile-icon">
        <Component />
      </div>
      <div className="header-tile-content">{content}</div>
    </div>
  );
}
