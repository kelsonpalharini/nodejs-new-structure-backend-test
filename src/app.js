import express from "express";
import routes from "./routes";
import cors from "cors";
import bodyParser from "body-parser";

global.XMLHttpRequest = require("xhr2");

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(bodyParser.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
