import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import { fetchAll } from "./actions";
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
        <main className="container">
          <div className="row mt-40">
            {store.artObjects.map(art => (
              <div className="col-md-4" key={art.id}>
                <Link to={`/collection/${art.objectNumber}`}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={art.webImage.url}
                      alt={art.longTitle}
                    />
                    <div className="card-body">
                      <p className="card-text">{art.title}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
