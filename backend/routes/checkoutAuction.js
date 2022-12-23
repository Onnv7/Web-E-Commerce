import express from "express";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {
    createCheckoutAuction,
    selectAllCheckoutAuctionsByUserId,
    selectAllCheckoutAuctionsByShopId,
    deleteAuction,
    updateCheckoutAuction,
    selectCheckoutAuctionByShopIdAndStatus,
    updateCheckoutStatusAuction,
    selectAllCheckoutStatusAuctionsByUserId,
} from "../controllers/checkoutAuctionController.js";
const router = express.Router();

// !user
// create a new checkout auction
router.post("/", createCheckoutAuction);

router.get("/shop/:status/:shopId", selectCheckoutAuctionByShopIdAndStatus);

// select all checkout auction by shop
router.get("/shop/:shopId", selectAllCheckoutAuctionsByShopId);

router.get("/all/:userId", selectAllCheckoutStatusAuctionsByUserId);

// !user
// select all checkout auction by user
router.get("/:userId", selectAllCheckoutAuctionsByUserId);

router.patch("/status/:id", updateCheckoutStatusAuction);
// !user
//
router.patch("/:id", updateCheckoutAuction);

// !user
//
router.delete("/:id", deleteAuction);

export default router;
