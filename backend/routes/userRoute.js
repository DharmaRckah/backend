import express from "express";
import { registerController } from "../controller/register.js";

const router = express.Router();

router.get("/register", registerController);

export default router;
