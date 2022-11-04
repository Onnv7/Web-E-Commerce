import express from "express";
import { createShop, deleteShop, updateShop, getShop, getAllShop } from "../controllers/shopController.js";
import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { insertCategory, deleteCategory, selectCategory, updateNameCategory, updateQuantityCategory } from "../controllers/categoryController.js";

const router = express.Router();

// get all
router.get("/", getAllShop);
// get one by user id
router.get("/:id", getShop);
// create shop
router.post("/create/:id", createShop);
// delete shop by user id
router.delete("/delete/:id", deleteShop);
// update shop by user id
router.put("/:id", updateShop);
// insert category by shop id
router.post("/category/insert/:idShop", insertCategory)
// select all category by shop id
router.get("/category/:idShop", selectCategory)
// delete category by shop id, category name
router.delete("/category/delete/:idShop/:idCgr", deleteCategory)
// update category name by shop id, category name
router.patch("/category/updateName/:idShop/:idCgr", updateNameCategory)
// update category quantity by shop id, category name
router.patch("/category/updateQuantity/:idShop/:idCgr", updateQuantityCategory)
export default router;