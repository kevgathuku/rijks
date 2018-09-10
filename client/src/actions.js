const axios = require("axios");

let BASE_URL;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:8000/api";
} else {
  BASE_URL = "https://rijks-challenge.herokuapp.com/api";
}

export const fetchAll = store => {
  axios
    .get(`${BASE_URL}/all`)
    .then(function(response) {
      store.setArtObjects(response.data.data.artObjects);
    })
    .catch(function(error) {
      console.error(error);
    });
};

export const fetchDetails = (artId, store) => {
  axios
    .get(`${BASE_URL}/getItem?id=${artId}`)
    .then(function(response) {
      store.setCurrentArtObject(response.data.data.artObject);
    })
    .catch(function(error) {
      console.error(error);
    });
};

export const filterCollection = (query, store) => {
  axios
    .get(`${BASE_URL}/filter${query}`)
    .then(function(response) {
      console.log(response.data);
      store.setArtObjects(response.data.data.artObjects);
    })
    .catch(function(error) {
      console.error(error);
    });
};
