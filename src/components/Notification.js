import React from "react";

export default function Notification(props) {
  // props.cartContents.length > 0 ?
  //   let recentAmount = props.cartContents[props.cartContents.length - 1][1];
  //   let recentItem = props.cartContents[props.cartContents.length - 1][2];
  const handleNotificationExit = () => {
    props.setDisplayNotification(false);
  };
  return (
    <div className="notification">
      {props.cartContents.length > 0 ? (
        <p className="notificationText">
          {props.cartContents[props.cartContents.length - 1][[1]]}x{" "}
          {props.cartContents[props.cartContents.length - 1][[2]]} has been
          added to the cart!
        </p>
      ) : null}
      <div>
        <button onClick={props.handleDisplayCart}>View Cart</button>
        <button className="exit-notification" onClick={handleNotificationExit}>
          X
        </button>
      </div>
    </div>
  );
}
