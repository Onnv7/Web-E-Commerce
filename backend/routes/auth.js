import express from "express";
import { register, login, getUser } from "../controllers/authController.js";
const router = express.Router();


// URL
router.get("/getUser", getUser);

// register a new user
router.post("/register", register);

// login to set token into cookie
router.post("/login", login);

export default router;
