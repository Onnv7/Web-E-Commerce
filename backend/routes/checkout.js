import express from "express";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";
import { createCheckout, getAllCheckoutByIdUser, updateCheckout, deleteCheckout, getCheckoutByIdCheckout } from "../controllers/checkoutController.js";
const router = express.Router();


// // URL
router.post("/create/:idUser", createCheckout);
router.patch("/update/:idCheckout", updateCheckout);
router.delete("/delete/:idCheckout", deleteCheckout);
router.get("/getAll/:idUser", getAllCheckoutByIdUser);
router.get("/get/:idCheckout", getCheckoutByIdCheckout);
//router.get("/getAll/:idUser/:idProduct", getAllCheckoutByIdUserAndProduct);
// router.delete("/delete/:id", deleteProduct);
// router.put("/update/:id", updateProduct);
// router.get("/:idShop/:idCgr", getGroupProducts);
// router.get("/:idShop", getAllProducts);
// // router.post("/register/:id", verifyUser, registerShop);
// // router.delete("/:id", verifyBuyer, deleteShop);
// // router.put("/:id", verifyBuyer, updateShop);
export default router;