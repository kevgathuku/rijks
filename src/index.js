import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import CollectionFilterView from "./containers/CollectionFilterView";
import ArtObjectDetails from "./components/ArtObjectDetails";
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
          render={routeProps => <Home {...routeProps} {...props} />}
        />
        <Route
          path="/collection/:artId"
          render={routeProps => <ArtObjectDetails {...routeProps} {...props} />}
        />
        <Route
          path="/collection/filter"
          render={routeProps => (
            <CollectionFilterView {...routeProps} {...props} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root store={store} />, document.getElementById("root"));
registerServiceWorker();
