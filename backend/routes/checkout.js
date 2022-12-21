import express from "express";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {
    createCheckout,
    selectAllCheckoutByUser,
    selectCheckoutById,
    updateCheckout,
    deleteCheckout,
    shopRevenue,
    adminRevenue,
    selectAllCheckouts,
} from "../controllers/checkoutController.js";
const router = express.Router();

// !user
// create a new checkout
router.post("/", createCheckout);

// !admin
// FIXME: de test, co gi xoa
router.get("/", selectAllCheckouts);

// !user
// select all checkout by user
router.get("/all/:userId", selectAllCheckoutByUser);

// !admin
// Truen query ?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd
router.get("/revenueAdmin", adminRevenue);

// !admin
// TODO: check using
// select a checkout
router.get("/:id", selectCheckoutById);

// !seller
// select shop by shop id
router.get("/revenue/:shopId", shopRevenue);

// !user
// TODO: check using
// update a checkout
router.patch("/:id", updateCheckout);

// !user
// TODO: check using
// delete a checkout
router.delete("/:id", deleteCheckout);

export default router;
