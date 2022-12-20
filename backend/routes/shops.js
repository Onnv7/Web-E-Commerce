import express from "express";
import {
    selectShopByShopID,
    createShop,
    deleteShop,
    updateShop,
    selectShop,
    selectAllShop,
} from "../controllers/shopController.js";
import { shopRevenue } from "../controllers/checkoutController.js";
import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// ! admin
// TODO: check using
// select all
router.get("/", selectAllShop);

// ! admin
// TODO: check using
// select shop by shop id
router.get("/shop/:shopId", selectShopByShopID);

// ! unknown
// TODO: check using
// select one by user id
router.get("/:userId", selectShop);

// ! user
// TODO: check using
// create shop
router.post("/", createShop);

// ! seller
// TODO: check using
// delete shop by user id
router.delete("/:userId", deleteShop);

// ! seller
// TODO: check using
// update shop by user id
router.patch("/:userId", updateShop);

export default router;
