import { observable, action } from "mobx";

class ArtObject {
  @observable
  id = "";

  @observable
  title = "";

  @observable
  maker = "";

  @observable
  url = "";
}

export default class RijksMuseumStore {
  @observable
  artObjects = [];

  @action
  setArtObjects(newArtObjects) {
    this.artObjects = newArtObjects;
  }
}
