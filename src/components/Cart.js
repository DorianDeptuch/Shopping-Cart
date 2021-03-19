import React from "react";
var uniqid = require("uniqid");

export default function Cart(props) {
  const handleCancel = () => {
    props.setDisplayCart(false);
  };

  const handleDelete = (e) => {
    let cartContentsCopy = [...props.cartContents];
    let itemToRemove = [];
    let imageStringStartPosition = "";
    let imageFullSource = "";

    e.target.parentNode.childNodes.forEach((i) =>
      itemToRemove.push(i.textContent)
    );
    imageFullSource = e.target.parentNode.childNodes[0].src;
    imageStringStartPosition = e.target.parentNode.childNodes[0].src.search(
      /images/
    );

    itemToRemove[0] = imageFullSource.slice(
      imageStringStartPosition - 1,
      imageFullSource.length
    );
    itemToRemove[1] = +itemToRemove[1];
    itemToRemove.splice(-1, 1);

    for (let j = 0; j < props.cartContents.length; j++) {
      if (
        JSON.stringify(itemToRemove) === JSON.stringify(props.cartContents[j])
      ) {
        cartContentsCopy.splice(j, 1);
        props.setCartContents(cartContentsCopy);
      } else {
        continue;
      }
    }

    props.setSubtotal(
      (prev) =>
        +(prev -= +e.target.parentNode.childNodes[3].textContent).toFixed(2)
    );
  };

  let mappedContents = props.cartContents.map((item) => (
    <li key={uniqid()} className="itemized-list-item">
      <div>
        {item.map((subItem, i) =>
          i === 0 ? (
            <img
              key={uniqid()}
              className="cart-image"
              src={process.env.PUBLIC_URL + subItem}
              alt="cart"
            />
          ) : (
            <p key={uniqid()}>{subItem}</p>
          )
        )}
        <button onClick={handleDelete} className="delete">
          &#128465;
        </button>
      </div>
    </li>
  ));

  return (
    <div className="cart-div">
      <div className="header-cancel-div">
        <h2>Your Shopping Cart</h2>
        <button onClick={handleCancel} className="exit-button">
          X
        </button>
      </div>
      <div className="itemized-list">
        <ul>{mappedContents}</ul>
      </div>
      <div className="subtotal">
        <h2>Subtotal: ${props.subtotal}</h2>
      </div>
      <div className="checkout-cancel">
        <button>Checkout</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

// Add an added to cart notification that pops up at the bottom of the screen
// cart needs to be present in all components and have a state in app.js that can be switched on/off (displayCart)
// make the background blur when the displayCart is true
// "your cart is empty" if no items are present
// add a notification "item has been added to cart"
