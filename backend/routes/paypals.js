import express from "express";
import { pay, success, cancel } from "../controllers/paypalController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/", (req, res) => res.render("index"));
router.post("/pay/:id", verifyUser, pay);
//delete
router.get("/success/:id", success);
//get
router.get("/cancel", cancel);

export default router;
