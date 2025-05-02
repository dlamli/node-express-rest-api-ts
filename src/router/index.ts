import { Router } from "express";
import authentication from "./authentication.js";

const router = Router();

export default (): Router => {
  authentication(router);

  return router;
}