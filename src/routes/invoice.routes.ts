import express from "express";
import { getInvoices } from "../controllers/invoice.controller";

const router = express.Router();

router.get("/all", getInvoices);

export default router;
