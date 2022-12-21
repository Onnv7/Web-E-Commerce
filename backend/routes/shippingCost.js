import express from "express";
import {
    updateShipCost,
    getShipCost,
    createShipCost,
    getAllShipCost,
    getShipCostByZone,
} from "../controllers/shippingCostController.js";
const router = express.Router();

// ! unknown
// TODO: check using
// update a review
router.patch("/update", updateShipCost);

// ! none
// truyền query ?start=Quan 1&end=Quan2
router.get("/cost", getShipCost);

router.get("/zone", getShipCostByZone);

router.get("/", getAllShipCost);

// ! none
// truyền query ?start=Quan 1&end=Quan2
router.post("/create", createShipCost);

export default router;
