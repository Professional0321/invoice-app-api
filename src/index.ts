import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes";
import accountRoutes from "./routes/account.routes";
import invoiceRoutes from "./routes/invoice.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/accounts", accountRoutes);
app.use("/invoices", invoiceRoutes);

const port = parseInt(process.env.PORT ?? "8000");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
