// libs
import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
// store
import store from "./store";
// components
import Header from "./components/Header";
import SettingDrawer from "./components/SettingDrawer";
import Footer from "./components/Footer";
// routers
import routes from "./routers/appRouter";
import LanguageProvider from "./context";

const App = () => (
  <Provider store={store}>
    <LanguageProvider>
      <Router>
        <Header />
        <SettingDrawer />
        <Switch>
          <Redirect from="/nhaccuatui.com-web" to="/" exact />
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} component={component} exact></Route>
          ))}
        </Switch>
        <Footer />
      </Router>
    </LanguageProvider>
  </Provider>
);

export default App;
