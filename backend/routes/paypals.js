import express from "express";
import {
    pay,
    success,
    cancel,
    buyRuby,
} from "../controllers/paypalController.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// !user
router.post("/buy/:id", buyRuby);

// !user
router.post("/pay/:id", pay);

// !user
//delete
router.get("/success/:id", success);

// !user
//get
router.get("/cancel", cancel);

export default router;
