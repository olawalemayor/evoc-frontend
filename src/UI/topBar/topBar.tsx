import React, { Fragment, useState } from "react";

export default function TopBar() {
  const [isLoggedIn] = useState(true);

  return (
    <Fragment>
      <div className="topbar">
        <div>
          <nav className="topbar-nav">
            <li>
              <a href="#top1">Refunds</a>
            </li>
            <li>
              <a href="#top2">Privacy & Policy</a>
            </li>
            <li>
              <a href="#top3">Fees</a>
            </li>
            <li>
              <a href="#top4">FAQ</a>
            </li>
          </nav>
        </div>
        {!isLoggedIn && (
          <div className="topbar-nav">
            <li>
              <a href="#top5">Login</a>
            </li>
            <li>
              <a href="#top6">Signup</a>
            </li>
          </div>
        )}
        {isLoggedIn && (
          <div className="topbar-logged-greeting">
            Hello, <a href="#top7">username</a>
          </div>
        )}
      </div>
    </Fragment>
  );
}
