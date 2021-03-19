import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/404";
import Cart from "./components/Cart";
import Notification from "./components/Notification";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartContents, setCartContents] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(1);
  const [displayNotificaton, setDisplayNotification] = useState(false);

  const handleDisplayCart = () => {
    setDisplayCart(!displayCart);
    // !displayCart
    //   ? document.querySelector("body").classList.add("noScroll")
    // and pointer-events: none ?
    //   : document.querySelector("body").classList.remove("noScroll");
  };
  return (
    <Router>
      <Navbar
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        handleDisplayCart={handleDisplayCart}
        cartContents={cartContents}
      />
      {displayCart && (
        <Cart
          displayCart={displayCart}
          setDisplayCart={setDisplayCart}
          cartContents={cartContents}
          setCartContents={setCartContents}
          subtotal={subtotal}
          setSubtotal={setSubtotal}
        />
      )}
      {displayNotificaton && (
        <Notification
          // displayCart={displayCart}
          handleDisplayCart={handleDisplayCart}
          // displayNotificaton={displayNotificaton}
          setDisplayNotification={setDisplayNotification}
          cartContents={cartContents}
        />
      )}
      <Switch>
        <Route
          exact
          path="/Shopping-Cart/"
          render={(props) => (
            <Home
              {...props}
              displayCart={displayCart}
              setDisplayCart={setDisplayCart}
            />
          )}
        />
        <Route
          path="/About"
          render={(props) => (
            <About
              {...props}
              displayCart={displayCart}
              setDisplayCart={setDisplayCart}
            />
          )}
        />
        <Route
          path="/Shop"
          render={(props) => (
            <Shop
              {...props}
              displayCart={displayCart}
              setDisplayCart={setDisplayCart}
              handleDisplayCart={handleDisplayCart}
              cartContents={cartContents}
              setCartContents={setCartContents}
              itemAmount={itemAmount}
              setItemAmount={setItemAmount}
              subtotal={subtotal}
              setSubtotal={setSubtotal}
              setDisplayNotification={setDisplayNotification}
            />
          )}
        />
        <Route path="/" render={() => <ErrorPage />} />
      </Switch>
    </Router>
  );
}

export default App;

//D       make the screen unscrollable when shopping cart is active
//D       Ask how to make it so that a mapped item can have its own state
//D       how to add an image along with paragraphs in a single map
//D       find out how to access certain elements in the mapped array
//D       ask how to access the relative path in json file and set to img src
//D       get <Link>  to work so page doesn't reload each time
//D       make sure the home is the homepage
//D       add ability to delete item from shopping cart
//D       add a back to top button
//        add a number of items next to shopping cart and/or a  go to cart button when add to cart is clicked
//D       remove item from array when deleted off the shopping cart
//        figure out why site doesn't look good on iphone, make the home and about sections width about 90%
//        figure out why the shop page isn't being responsive
//        change the select options so that the id used to scrollIntoview is the price tag or the name itself
//D       add a notification "x item has been added to cart [view cart]"
//D       live build loads to the 404 page, images not working on the live build
//?       bug: if two of the same item and amount are next to each other, both are deleted if one is clicked -- hard to replicate
//        disable add to cart button if itemAmount is 0
//        maybe work on making the buttons prettier
