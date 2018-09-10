import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Rijksmuseum</h1>
        </header>
        <main className="container">
          <div className="row mt-40">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://placeimg.com/200/200/nature"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4"><div className="card">
                <img
                  className="card-img-top"
                  src="https://placeimg.com/200/200/nature"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div></div>
            <div className="col-md-4"><div className="card">
                <img
                  className="card-img-top"
                  src="https://placeimg.com/200/200/nature"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div></div>
            <div className="col-md-4"><div className="card">
                <img
                  className="card-img-top"
                  src="https://placeimg.com/200/200/nature"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div></div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
