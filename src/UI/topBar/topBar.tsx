import React, { Fragment, useState } from "react";

export default function TopBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Fragment>
      <div className="topbar">
        <div>
          <nav className="topbar-nav">
            <li>
              <a href="#">Refunds</a>
            </li>
            <li>
              <a href="#">Privacy & Policy</a>
            </li>
            <li>
              <a href="#">Fees</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </nav>
        </div>
        {!isLoggedIn && (
          <div className="topbar-nav">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
          </div>
        )}
        {isLoggedIn && (
          <div className="topbar-logged-greeting">
            Hello, <a href="#">username</a>
          </div>
        )}
      </div>
    </Fragment>
  );
}
