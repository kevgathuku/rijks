import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import ArtObject from "./components/ArtObject";
import registerServiceWorker from "./registerServiceWorker";
import RijksMuseumStore from "./store";
import "./index.css";

const store = new RijksMuseumStore();

const Root = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <App {...routeProps} {...props} />}
        />
        <Route
          path="/collection/:artId"
          render={routeProps => <ArtObject {...routeProps} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
