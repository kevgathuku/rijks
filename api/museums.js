const axios = require("axios");
const qs = require("qs");

require("dotenv").config();

const BASE_API_URL = "https://www.rijksmuseum.nl/api/en";

const defaultParams = qs.stringify({
  key: process.env.API_KEY,
  format: "json"
});

// TODO: Add pagination
const fetchAll = (req, h) => {
  return axios
    .get(`${BASE_API_URL}/collection?${defaultParams}`)
    .then(response => {
      console.log(response);
      return { data: response.data };
    })
    .catch(error => {
      console.log(error);
      return { error: error };
    });
};

const fetchItem = (request, h) => {
  const itemID = request.query.id;
  if (!itemID) return { error: "No ID provided" };

  return axios
    .get(`${BASE_API_URL}/collection/${itemID}?${defaultParams}`)
    .then(response => {
      // handle success
      console.log(response);
      return { data: response.data };
    })
    .catch(error => {
      // handle error
      console.log(error);
      return { error: error };
    });
};

// TODO: Add pagination
const filter = (request, h) => {
  const itemType = request.query.type;
  const material = request.query.material;
  if (!itemType && !material) return { error: "No filtering data provided!" };

  let finalURL;
  let defaultURL = `${BASE_API_URL}/collection?${defaultParams}`;

  if (itemType) {
    let params = qs.stringify({
      type: itemType
    });
    finalURL = `${defaultURL}&${params}`;
  }

  if (material) {
    let params = qs.stringify({
      material
    });
    finalURL = `${defaultURL}&${params}`;
  }

  return axios
    .get(finalURL)
    .then(response => {
      console.log(response.data);
      return { data: response.data };
    })
    .catch(error => {
      // handle error
      console.log(error);
      return { error: error };
    });
};

module.exports = { fetchAll, fetchItem, filter };
