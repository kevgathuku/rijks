const axios = require("axios");

const BASE_URL = "http://localhost:8000/api";

export const fetchAll = store => {
  axios
    .get(`${BASE_URL}/all`)
    .then(function(response) {
      console.log(response.data);
      // save data in store
      store.setArtObjects(response.data.data.artObjects);
    })
    .catch(function(error) {
      // dispatch error
      console.log(error);
    });
};
export const fetchDetails = (artId, store) => {
  axios
    .get(`${BASE_URL}/getItem?id=${artId}`)
    .then(function(response) {
      console.log(response.data);
      // save data in store
      store.setCurrentArtObject(response.data.data.artObject);
    })
    .catch(function(error) {
      // dispatch error
      console.log(error);
    });
};
