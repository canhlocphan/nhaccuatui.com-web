import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// pages
import About from "./pages/about";
import Home from "./pages/home";

// components
import Header from "./components/header";
import Footer from "./components/footer";

// scss
import "./index.scss";
import "antd/dist/antd.css";

// libs
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
