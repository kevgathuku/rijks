import { observable, action } from "mobx";

class ArtObject {
  @observable
  id = "";

  @observable
  title = "";

  @observable
  description = "";

  @observable
  maker = "";

  @observable
  date = "";

  @observable
  imageURL = "";

  @observable
  objectTypes = [];

  @observable
  materials = [];

  constructor(props) {
    this.id = props.id;
    this.title = props.title;
    this.maker = props.principalMaker;
    this.date = props.dating.presentingDate;
    this.description = props.description;
    this.imageURL = props.webImage.url;
    this.objectTypes = props.objectTypes;
    this.materials = props.materials;
  }
}

export default class RijksMuseumStore {
  @observable
  artObjects = [];

  @observable
  currentArtObject = {};

  @action
  setArtObjects(newArtObjects) {
    this.artObjects = newArtObjects;
  }

  @action
  setCurrentArtObject(artObjectData) {
    this.currentArtObject = new ArtObject(artObjectData);
  }
}
