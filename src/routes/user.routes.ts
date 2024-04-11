import express from "express";
import { getLoggedInUser } from "../controllers/user.controller";

const router = express.Router();

router.get("/me", getLoggedInUser);

export default router;
