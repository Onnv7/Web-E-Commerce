import express from "express";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import {
    createCheckout,
    selectAllCheckoutByUser,
    selectCheckout,
    updateCheckout,
    deleteCheckout,
    shopRevenue,
    adminRevenue,
} from "../controllers/checkoutController.js";
const router = express.Router();

// !user
// create a new checkout
router.post("/", createCheckout);

// !user
// select all checkout by user
router.get("/all/:userId", selectAllCheckoutByUser);

// !admin
// TODO: check using
// select a checkout
router.get("/:id", selectCheckout);

// !seller
// select shop by shop id
router.get("/revenue/:shopId", shopRevenue);

// !admin
// select shop by shop id
router.get("/revenueAdmin/:shopId", adminRevenue);

// !user
// TODO: check using
// update a checkout
router.patch("/:id", updateCheckout);

// !user
// TODO: check using
// delete a checkout
router.delete("/:id", deleteCheckout);

export default router;
