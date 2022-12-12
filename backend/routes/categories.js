import express from "express";
import { createMainCategory, updateMainCategory, deleteMainCategory, selectAllMainCategory } from "../controllers/mainCategoryController.js";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create category for shop
router.post("/", createMainCategory);

// delete category
router.delete("/:id", deleteMainCategory);

// select all categories 
router.get("/", selectAllMainCategory);


// update quantity category by shop id and category name
router.put("/:id", updateMainCategory);

export default router;