import React from "react";
import ReactDOM, { render } from "react-dom";
import { FiClock } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-bar">
        <a className="navbar-brand" href="#/">
          <FiClock style={{ magrinTop: "20px" }} />
          KKJI
        </a>
        <ul className="nav-right ">
          <li className="nav-item">
            <Link className="home" to="/"></Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/">
              OkkJI FOR RETAILERS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/AdminDashboard">
              OkkJI FAST
            </Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/AdminLogin">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="home" to="/AdminLogin">
              OFFERS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
