import { NextFunction, Request, Response } from "express";
import merge from 'lodash/merge.js';
import get from "lodash/get.js";

import { getUserBySessionToken } from "db/models/users.js";


export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sessionToken = req.cookies['AUTH-LOGIN'];

    if (!sessionToken) return res.sendStatus(403);

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) return res.sendStatus(403);

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const isOwner = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = get(req, "identity._id") as string;

    if (!userId) return res.sendStatus(403);
    if (userId !== id) return res.sendStatus(403);

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}