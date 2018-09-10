const Path = require("path");
const Hapi = require("hapi");
const Inert = require("inert");
const namespace = require("hapijs-namespace");

const api = require("./api/museums");

const server = Hapi.server({
  host: "0.0.0.0",
  port: process.env.PORT || 8000,
  routes: {
    cors: true,
    files: {
      relativeTo: Path.join(__dirname, 'client', 'build')
    }
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
    await server.register(Inert);

    server.route({
      method: "GET",
      path: "/{param*}",
      handler: {
        directory: {
          path: ".",
          redirectToSlash: true,
          index: true
        }
      }
    });
    await server.start();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Server running at:", server.info.uri);
}

start();
