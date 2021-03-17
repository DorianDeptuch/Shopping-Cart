import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="nav">
      <div className="title-div">
        <h1 className="title">THE C4 CAM</h1>
      </div>
      <div className="list-div">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Shop">Shop</NavLink>
          </li>
          <li>
            <p className="nav-cart-link" onClick={props.handleDisplayCart}>
              &#128722;
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
