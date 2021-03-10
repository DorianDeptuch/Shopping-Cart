import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="title-div">
        <h1 className="title">THE C4 CAM</h1>
      </div>
      <div className="list-div">
        <ul>
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Shop">Shop</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
