import express from "express"; 
import { createReview, updateReview, deleteReview, getAllReview } from "../controllers/reviewController.js"
const router = express.Router();


// URL
router.post("/create/:idUser", createReview);
router.patch("/update/:idReview", updateReview);
router.delete("/delete/:idReview", deleteReview);
// get review của product
router.get("/get/:idProduct", getAllReview);

export default router;
