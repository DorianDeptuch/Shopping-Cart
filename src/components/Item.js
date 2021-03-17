import React, { useState } from "react";

export default function Item(props) {
  const [itemAmount, setItemAmount] = useState(1);

  const increment = () => {
    setItemAmount((prev) => prev + 1);
  };

  const decrement = () => {
    setItemAmount((prev) => prev - 1);
  };

  const pushItemContent = () => {
    let itemTotal = (itemAmount * props.price).toFixed(2);
    props.setCartContents((prev) => [
      ...prev,
      [props.image, itemAmount, props.name, itemTotal],
    ]);
    props.setSubtotal((prev) => +(prev += itemAmount * props.price).toFixed(2));
  };

  const handleChange = (e) => {
    if (e.target.parentNode.childNodes[1].value <= 0) {
      setItemAmount(1);
      e.target.parentNode.parentNode.childNodes[0].disabled = true;
    }
  };

  const handleScroll = () => {
    document.getElementById("select").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id={props.identifier} className="item-container">
      <div className="item-header-container">
        <h2 className="item-type-name">{props.name}</h2>
        <div className="item-type-buy">
          <div>
            <button
              onMouseUp={handleChange}
              onClick={decrement}
              className="minus"
            >
              -
            </button>
            <input
              onChange={handleChange}
              className="amount"
              type="number"
              placeholder="#"
              value={itemAmount}
            />
            <button onClick={increment} className="plus">
              +
            </button>
          </div>
          <button onClick={pushItemContent} className="purchase">
            Add to Cart
          </button>
          <button onClick={handleScroll} className="scroll">
            Back to Top
          </button>
        </div>
      </div>
      <div className="img-title-desc-container">
        <img
          className="item-type-image"
          alt={props.name}
          src={process.env.PUBLIC_URL + props.image}
        ></img>

        <div className="title-desc-container">
          <div>
            <h4 className="item-title">NAME</h4>
            <h4 className="item-desc">{props.name}</h4>
          </div>
          <div>
            <h4 className="item-title">PRICE</h4>
            <h4 className="item-desc">{props.price}</h4>
          </div>
          <div>
            <h4 className="item-title">WEIGHT (G / OZ)</h4>
            <h4 className="item-desc">{props.weight}</h4>
          </div>
          <div>
            <h4 className="item-title">CAM HEAD</h4>
            <h4 className="item-desc">{props.camHead}</h4>
          </div>
          <div>
            <h4 className="item-title">OFFSET</h4>
            <h4 className="item-desc">{props.offset}</h4>
          </div>
          <div>
            <h4 className="item-title">STEM</h4>
            <h4 className="item-desc">{props.stem}</h4>
          </div>
          <div>
            <h4 className="item-title">SLING</h4>
            <h4 className="item-desc">{props.sling}</h4>
          </div>
          <div>
            <h4 className="item-title">CAMMING ANGLE</h4>
            <h4 className="item-desc">{props.cammingAngle}</h4>
          </div>
          <div>
            <h4 className="item-title">ACTIVE STRENGTH</h4>
            <h4 className="item-desc">{props.activeStrength}</h4>
          </div>
          <div>
            <h4 className="item-title">CAM RANGE (MM / IN)</h4>
            <h4 className="item-desc">{props.camRange}</h4>
          </div>
          <div>
            <h4 className="item-title">MATERIALS</h4>
            <h4 className="item-desc">{props.materials}</h4>
          </div>
          <div>
            <h4 className="item-title">CERTIFICATION</h4>
            <h4 className="item-desc">{props.certification}</h4>
          </div>
          <div>
            <h4 className="item-title">WORTH IT?</h4>
            <h4 className="item-desc">{props.worthIt}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
