import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();

connectDb();
const app = express();
app.use(express.json());

app.use("/api/v1/auth", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT} on ${process.env.DEV_MODE}  mode `);
});
