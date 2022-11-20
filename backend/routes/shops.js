import express from "express";
import { createShop, deleteShop, updateShop, selectShop, selectAllShop } from "../controllers/shopController.js";
import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// select all
router.get("/", selectAllShop);

// select one by user id
router.get("/:userId", selectShop);

// create shop
router.post("/", createShop);

// delete shop by user id
router.delete("/:userId", deleteShop);

// update shop by user id
router.patch("/:userId", updateShop);


export default router;