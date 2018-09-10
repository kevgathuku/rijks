import React from "react";
import { Link } from "react-router-dom";

const ListView = props => (
  <main className="container">
    <div className="row mt-40">
      {(props.items || []).map(art => (
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
);

export default ListView;
