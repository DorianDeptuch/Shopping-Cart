import React, { useState } from "react";
import Item from "../components/Item";

export default function Shop(props) {
  const dataFromJSON = require("../data/data.json");
  const techSpecs = dataFromJSON.data;
  const [items, setItems] = useState(techSpecs);

  window.scrollTo(0, 0);

  const mappedName = items.map((item) => (
    <option key={item.id}>
      {item.id} - {item.name}
    </option>
  ));

  const mappedItems = items.map((item) => (
    <Item
      identifier={item.id}
      key={item.name}
      image={item.image}
      name={item.name}
      price={item.price}
      weight={item.weight}
      camHead={item.camHead}
      offset={item.offset}
      stem={item.stem}
      sling={item.sling}
      cammingAngle={item.cammingAngle}
      activeStrength={item.activeStrength}
      camRange={item.camRange}
      materials={item.materials}
      certification={item.certification}
      worthIt={item.worthIt}
      handleDisplayCart={props.handleDisplayCart}
      displayCart={props.displayCart}
      setDisplayCart={props.setDisplayCart}
      cartContents={props.cartContents}
      setCartContents={props.setCartContents}
      itemAmount={props.itemAmount}
      setItemAmount={props.setItemAmount}
      subtotal={props.subtotal}
      setSubtotal={props.setSubtotal}
      setDisplayNotification={props.setDisplayNotification}
    />
  ));

  const handleChange = (e) => {
    let sliced = e.target.value.slice(0, 2);

    if (e.target.value === "--Select a CAM--") {
      return;
    } else {
      document.getElementById(`${sliced}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div
      className="shop-div-container"
      style={{ filter: props.displayCart && "blur(0.4rem)" }}
    >
      <div className="shop-parallax-4">
        <span className="shop-parallax-4-text">
          SHOP FOR THE <br /> GREATEST GEAR
        </span>
      </div>
      <div className="input-div">
        <label>
          <select id="select" onChange={handleChange} type="select">
            <option>--Select a CAM--</option>
            {mappedName}
          </select>
        </label>
      </div>
      <div className="shop-div">{mappedItems}</div>
    </div>
  );
}
