import express from "express";
import {
    selectAllAuctions,
    selectAuctionById,
    updateAuction,
    deleteAuction,
    reverseAuction,
    createAuction,
    selectAllAuctionsByUserId,
    selectAllAuctionsByBidderId,
} from "../controllers/auctionController.js";
const router = express.Router();
// !admin
//  select all auctions
router.get("/", selectAllAuctions);

// !user
// select auction by id
router.get("/all/:userId", selectAllAuctionsByUserId);

router.get("/bidder/:bidderId", selectAllAuctionsByBidderId);

// !user
// select auction by id
router.get("/:id", selectAuctionById);

// !user
router.post("/create", createAuction);

// !user
// post auction, post {bidder là id shop, price là giá }
router.post("/auction/:id", reverseAuction);

// !user
// update auction
router.put("/:id", updateAuction);

// !user
// delete auction
router.delete("/:id", deleteAuction);

export default router;
