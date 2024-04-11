import express from "express";
import { getAllAccounts } from "../controllers/account.controller";

const router = express.Router();

router.get("/all", getAllAccounts);

export default router;
