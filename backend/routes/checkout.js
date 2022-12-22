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
    selectCheckoutByShopIdAndStatus,
    selectCheckoutByShopId,
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

// !seller
// select revenue by shop id
router.get("/revenue/:shopId", shopRevenue);

// !seller
// select checkout by shop id and status
router.get("/shop/:status/:shopId/", selectCheckoutByShopIdAndStatus);

// !seller
// select checkout by shop id
router.get("/shop/:shopId", selectCheckoutByShopId);

// !admin
// TODO: check using
// select a checkout
router.get("/:id", selectCheckoutById);

// !user
// TODO: check using
// update a checkout
router.patch("/:id", updateCheckout);

// !user
// TODO: check using
// delete a checkout
router.delete("/:id", deleteCheckout);

export default router;
