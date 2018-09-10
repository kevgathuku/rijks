import React, { Component } from "react";

import { observer } from "mobx-react";

import ListView from "../../components/ListView";
import { fetchAll } from "../../actions";
import "./App.css";

@observer
class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    fetchAll(store);
  }

  render() {
    const { store } = this.props;
    if (!store) return null;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rijksmuseum</h1>
        </header>
        <ListView items={store.artObjects} />
      </div>
    );
  }
}

export default App;
