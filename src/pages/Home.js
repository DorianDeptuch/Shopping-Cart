import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div
      className="home-div-container"
      style={{
        filter: props.displayCart && "blur(0.4rem)",
      }}
    >
      <div className="home-parallax-0">
        <span className="home-parallax-0-text">
          ARE YOU <br />
          READY?
        </span>
      </div>
      <div className="section-1">
        <div className="section-text">
          <h3>CLIMBING</h3>
          <p>
            Climbing is our heritage. We started with a backyard anvil and
            hammer in search of new ways to ascend the big walls of Yosemite
            Valley. Today, that same spirit of ingenuity envelopes everything we
            do. From the indelible Camalot, to the world’s first wire-gate
            climbing carabiner, we’ve protected rock, wild places and wild
            climbers for generations. This is our legacy.
          </p>
        </div>
      </div>
      <div className="home-parallax-1">
        <span className="home-parallax-1-text">
          FOR YOUR NEXT <br />
          ADVENTURE?!
        </span>
      </div>
      <div className="section-2">
        <div className="section-text">
          <h3>Introducing: The CAM</h3>
          <p>
            Climbing is our soul. From our humble beginnings to conquering the
            biggest walls in the world, we have been protecting rock, wild
            places and wild climbers for generations. The CAM is here for you.
          </p>
        </div>
      </div>
      <div className="home-parallax-2">
        <span className="home-parallax-2-text">
          THE FUN <br />
          BEGINS HERE
        </span>
      </div>
      <div className="section-3">
        <div className="section-text">
          <h3>SHOP NOW</h3>

          <button>
            <Link to="/Shop">CLICK HERE</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
