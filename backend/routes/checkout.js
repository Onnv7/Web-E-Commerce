import express from "express";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { createCheckout, selectAllCheckoutByUser, selectCheckout, updateCheckout, deleteCheckout } from "../controllers/checkoutController.js";
const router = express.Router();


// create a new checkout
router.post("/", createCheckout);

// select all checkout by user
router.get("/all/:userId", selectAllCheckoutByUser);

// select a checkout
router.get("/:id", selectCheckout);

// update a checkout
router.patch("/:id", updateCheckout);

// delete a checkout
router.delete("/:id", deleteCheckout);


export default router;