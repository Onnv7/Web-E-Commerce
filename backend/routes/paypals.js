import express from "express";
import { pay, success, cancel } from "../controllers/paypalController.js";
const router = express.Router();

router.get("/", (req, res) => res.render("index"));
router.post("/pay", pay);
//delete
router.get("/success", success);
//get
router.get("/cancel", cancel);

export default router;
