import express from "express";
import { updateShipCost, calculate } from "../controllers/shippingCostController.js"
const router = express.Router();


// update a review
router.patch("/update", updateShipCost);


// truyền query ?start=Quan1&end=Quan2
router.get("/cost", calculate);

export default router;
