import React, { Component } from "react";
import { observer } from "mobx-react";

import { fetchDetails } from "../actions";
import "./ArtObject.css";

@observer
export default class ArtObject extends Component {
  componentDidMount() {
    const {
      match: {
        params: { artId }
      }
    } = this.props;
    const { store } = this.props;
    fetchDetails(artId, store);
  }

  state = {
    title: "A Militiaman Holding a Berkemeyer, Known as the ‘Merry Drinker’",
    subtitle: "Frans Hals",
    date: "1639"
  };

  render() {
    const { store } = this.props;
    if (!store) return null;

    return (
      <div className="ArtDetails">
        <div className="container">
          <header className="ArtDetails-header">
            <h1 className="ArtDetails-title">
              {store.currentArtObject.title}
              {/* {this.state.title} */}
            </h1>

            <p className="ArtDetails-subtitle">
              <span>by </span>
              <a href="#" className="subtitle-link">
                {/* {this.state.subtitle} */}
                {store.currentArtObject.maker || ""}
              </a>
              {/* <span>, {this.state.date}</span> */}
              <span>, {store.currentArtObject.date}</span>
            </p>
          </header>
        </div>
        <div className="">
          <div className="ArtDetails-image text-center p-40">
            {/* <img src="https://placeimg.com/600/800/nature" /> */}
            <img
              src={store.currentArtObject.imageURL}
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    );
  }
}
