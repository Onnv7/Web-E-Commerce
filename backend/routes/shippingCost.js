import express from "express";
import {
    updateShipCost,
    calculate,
} from "../controllers/shippingCostController.js";
const router = express.Router();

// ! unknown
// TODO: check using
// update a review
router.patch("/update", updateShipCost);

// ! none
// truyền query ?start=Quan1&end=Quan2
router.get("/cost", calculate);

export default router;
