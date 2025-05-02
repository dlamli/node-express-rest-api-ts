import express, { Application } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { corsMiddleware } from '../middlewares/cors.js';
import { initMongoDBConnection } from '../db/config.js';


class Server {
  #app: Application;
  #port: number | string;

  constructor() {
    this.#app = express();
    this.#port = process.env.PORT || 8080;
    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await initMongoDBConnection();
  }

  middlewares() {
    this.#app.use(express.json());
    this.#app.use(bodyParser.json());
    this.#app.use(corsMiddleware());
    this.#app.use(compression());
    this.#app.use(cookieParser());
  }

  routes() {

  }

  init() {
    this.#app.listen(this.#port, () => {
      console.log(`Server running on http://localhost:${this.#port}`);
    });
  }
}

export default Server;