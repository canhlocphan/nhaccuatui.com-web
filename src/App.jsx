// libs
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// routers
import routes from "./routers/appRouter";

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Redirect from="/nhaccuatui.com-web" to="/" exact />
      {routes.map(({ id, path, component }) => (
        <Route key={id} path={path} component={component} exact></Route>
      ))}
    </Switch>
    <Footer />
  </Router>
);

export default App;
