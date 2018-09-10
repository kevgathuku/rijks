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

  render() {
    const { store } = this.props;
    if (!store) return null;

    return (
      <div className="ArtDetails">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Home
          </a>
        </nav>
        <div className="container-fluid wrapper">
          <div className="row">
            <div className="ArtDetails-header col-md-6">
              <h2 className="ArtDetails-title bold-font">
                {store.currentArtObject.title}
              </h2>
              <p className="ArtDetails-subtitle">
                <span>- {store.currentArtObject.maker || ""}</span>
                <span>, {store.currentArtObject.date || ""}</span>
              </p>
              <div className="text-left">
                <h3 className="text-capitalize bold-font mt-40">
                  Description
                </h3>
                <p className="lighter-font">
                  {store.currentArtObject.description || ""}
                </p>
                <h3 className="text-capitalize bold-font mt-40">
                  Materials
                </h3>
                <p className="lighter-font">
                  {(store.currentArtObject.materials || []).map(material => (
                    <a href="#TODO" key={material}>
                      {`${material}    `}
                    </a>
                  ))}
                </p>
                <h3 className="text-capitalize bold-font mt-40">
                  Object Types
                </h3>
                <p className="lighter-font">
                  {(store.currentArtObject.objectTypes || []).map(
                    objectType => (
                      <a href="#TODO" key={objectType}>
                        {`${objectType}    `}
                      </a>
                    )
                  )}
                </p>
              </div>
            </div>
            <div className="ArtDetails-content text-center col-md-6">
              <img
                className="ArtDetails-image"
                src={store.currentArtObject.imageURL}
                alt={store.currentArtObject.title}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
