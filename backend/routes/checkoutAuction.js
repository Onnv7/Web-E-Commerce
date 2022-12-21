import express from "express";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {
    createAuction,
    selectAllAuctionsByUserId,
} from "../controllers/checkoutAuctionController.js";
const router = express.Router();

// !user
// create a new checkout auction
router.post("/", createAuction);

// !user
// select all checkout auction by user
router.get("/:userId", selectAllAuctionsByUserId);

export default router;
