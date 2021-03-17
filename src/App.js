import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/404";
import Cart from "./components/Cart";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const [cartContents, setCartContents] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [itemAmount, setItemAmount] = useState(1);

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
      <Switch>
        <Route
          exact
          path="/"
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
//        how to add an image along with paragraphs in a single map
//        find out how to access certain elements in the mapped array
//D       ask how to access the relative path in json file and set to img src
//        get <Link>  to work so page doesn't reload each time
//        make sure the home is the homepage
//D       add ability to delete item from shopping cart
//D       add a back to top button
//        add a number of items next to shopping cart and/or a  go to cart button when add to cart is clicked
//D       remove item from array when deleted off the shopping cart
//        figure out why site doesn't look good on iphone, make the home and about sections width about 90%
//        figure out why the shop page isn't being responsive
//        change the select options so that the id used to scrollIntoview is the price tag or the name itself
//        add a notification "x item has been added to cart [view cart]"
//        live build loads to the 404 page, images not working on the live build
