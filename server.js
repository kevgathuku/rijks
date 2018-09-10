const Hapi = require("hapi");
const namespace = require("hapijs-namespace");
const api = require("./api/museums");

const server = Hapi.server({
  host: "localhost",
  port: 8000,
  routes: {
    cors: true
  }
});

namespace(server, "/api", [
  {
    method: "GET",
    path: "/",
    config: {
      description: "Healthcheck route",
      handler: function() {
        return "hello world";
      }
    }
  },
  {
    method: "GET",
    path: "/all",
    config: {
      description: "Fetch all items in collection",
      handler: api.fetchAll
    }
  },
  {
    method: "GET",
    path: "/getItem",
    config: {
      description: "Fetch individual item in a collection",
      handler: api.fetchItem
    }
  },
  {
    method: "GET",
    path: "/filter",
    config: {
      description: "Filter collection items",
      handler: api.filter
    }
  }
]);

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start();
