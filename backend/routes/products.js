import express from "express";
import { createProduct, getAllProducts, getGroupProducts, deleteProduct, updateProduct } from "../controllers/productController.js";
import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// URL
router.post("/create", createProduct);
router.delete("/delete/:id", deleteProduct);
router.put("/update/:id", updateProduct);
router.get("/:idShop/:idCgr", getGroupProducts);
router.get("/:idShop", getAllProducts);
// router.post("/register/:id", verifyUser, registerShop);
// router.delete("/:id", verifyBuyer, deleteShop);
// router.put("/:id", verifyBuyer, updateShop);
export default router;