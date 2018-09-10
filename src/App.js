import React, { Component } from "react";
import "./App.css";
import { fetchAll } from "./actions";
import { observer } from "mobx-react";

@observer
class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    fetchAll(store);
  }

  render() {
    const { store } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rijksmuseum</h1>
        </header>
        <main className="container">
          <div className="row mt-40">
            {store.artObjects.map(art => (
              <div className="col-md-4" key={art.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={art.webImage.url}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text">{art.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
