import { Router } from "express";
import authentication from "./authentication.js";
import users from "./user.js";

const router = Router();

export default (): Router => {
  authentication(router);
  users(router);

  return router;
}