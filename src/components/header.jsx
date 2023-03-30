import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <img  class="logo img-fluid" src="/images/bank.png" alt="" />
        <ul className="nav-bar-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#deposit">Features</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        <img class="collapse-img" src="images/icon-hamburger.svg" alt="" />
        <img class="close" src="images/icon-close.svg" alt="" />
        <div class="nav-buttons">
          <a href="signup" class="btn-signup">
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
