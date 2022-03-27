import React from "react";
import SearchBar from "../components/searchBar";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <div className="nav-bar container-wrapper">
        <nav className="nav-bar-nav hide-mobile">
          <ul>
            <li className="navigation-item">
              <a href="#" className="navigation-link">
                Link
              </a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">
                Link
              </a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">
                Link
              </a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">
                Account
              </a>
            </li>
            <li className="navigation-item">
              <a href="#" className="navigation-link">
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
