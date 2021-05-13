// libs
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import About from "./pages/About";
import Home from "./pages/Home";

// components
import Header from "./components/header";
import Footer from "./components/footer";

// others
import "./index.scss";
import "antd/dist/antd.css";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
