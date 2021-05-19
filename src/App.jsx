// libs
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// routers
import ROUTER from "./routers/AppRouter";

const App = () => (
  <Router>
    <Header />
    <Switch>
      {ROUTER.map((id, path, component) => (
        <Route key={id} path={path} component={component} exact></Route>
      ))}
    </Switch>
    <Footer />
  </Router>
);

export default App;
