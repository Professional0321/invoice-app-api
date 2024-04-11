import { Request, Response, NextFunction } from "express";
import { mockUser } from "../controllers/user.controller";

// Middleware function to authenticate routes using bearer token
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Extracting the token from the request headers
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  // If no token is found, return a 401 Unauthorized error
  if (token !== mockUser.accessToken) {
    return res.status(401).json({ error: "Unauthorized request" });
  }

  next();
};
