import express from "express";
import { register, login, getUser } from "../controllers/authController.js";
const router = express.Router();


// URL
router.get("/getUser", getUser);
router.post("/register", register);
router.post("/login", login);

export default router;
