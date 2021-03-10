import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/404";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Shop" component={Shop} />
        <Route path="/" render={() => <ErrorPage />} />
      </Switch>
    </Router>
  );
}

export default App;
