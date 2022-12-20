import express from "express";
import { pay, success, cancel } from "../controllers/paypalController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// TODO: check using
router.get("/", (req, res) => res.render("index"));

// !user
router.post("/pay/:id", verifyUser, pay);

// !user
//delete
router.get("/success/:id", success);

// !user
//get
router.get("/cancel", cancel);

export default router;
