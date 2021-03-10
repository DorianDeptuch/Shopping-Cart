import React, { useState, useEffect } from "react";
import Item from "../components/Item";

export default function Shop() {
  const data = require("../data/data.json");
  const techSpecs = data.data;
  const { NAME } = techSpecs;
  const [items, setItems] = useState(techSpecs);
  console.log(NAME);

  return (
    <div>
      <div className="shop-parallax-4">
        <span className="shop-parallax-4-text">
          SHOP FOR THE <br /> GREATEST GEAR
        </span>
      </div>
      <div className="input-div">
        <label>
          <select type="select">
            <option>--Please select an option--</option>
            {/* <option>{techSpecs.data[0].NAME}</option> */}
          </select>
        </label>
      </div>
      <div className="shop-div">
        {/* {[...new Array(9)].map((e, card) => (
          <Item
            key={card}
            cardInfo={card}
            imgSrc={items[card]}
            imgAlt={items[card]}
          />
        ))} */}
      </div>
    </div>
  );
}
