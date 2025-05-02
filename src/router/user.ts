import { Router } from "express";

import { deleteUser, getAllUsers, updateUser } from "controllers/user.js";
import { isAuthenticated, isOwner } from "middlewares/index.js";


export default (router: Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.patch('/users/:id', isAuthenticated, updateUser);
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
}