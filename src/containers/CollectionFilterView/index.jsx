import React, { Component } from "react";
import { observer } from "mobx-react";

import ListView from "../../components/ListView";
import { filterCollection } from "../../actions";
import "./CollectionFilterView.css";

@observer
class CollectionFilterView extends Component {
  componentDidMount() {
    const { store } = this.props;
    filterCollection(this.props.location.search, store);
  }

  render() {
    const { store } = this.props;
    if (!store) return null;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Filtered Art Objects
          </h1>
        </header>
        <ListView items={store.artObjects} />
      </div>
    );
  }
}

export default CollectionFilterView;
