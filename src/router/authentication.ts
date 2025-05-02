import { register } from "controllers/authentication.js";
import express, { Router } from "express";

export default (router: express.Router) => {
  router.post('/auth/register', register);
}
