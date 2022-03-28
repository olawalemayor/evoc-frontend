import React from "react";
import SearchBar from "../components/searchBar";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="nav-bar container-wrapper">
        <nav className="nav-bar-nav hide-mobile">
          <ul>
            <li className="navigation-item">
              <a href="#nav1" className="navigation-link">
                Link
              </a>
            </li>
            <li className="navigation-item">
              <a href="#nav2" className="navigation-link">
                Link
              </a>
            </li>
            <li className="navigation-item">
              <a href="#nav3" className="navigation-link">
                Link
              </a>
            </li>
            <li className="navigation-item">
              <a href="#nav4" className="navigation-link">
                Account
              </a>
            </li>
            <li className="navigation-item">
              <a href="#nav5" className="navigation-link">
                Help?
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex-display mobile-adjust mobile-search">
          <div className="toggler">☰</div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
