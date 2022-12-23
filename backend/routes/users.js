import express from "express";
import {
    updateDeliveryInfo,
    updateUserImage,
    selectUserByUserName,
    updateUser,
    updateUserPassword,
    deleteUser,
    selectUser,
    selectAllUsers,
    countBuyer,
    selectAllSellers,
    countSeller,
    generalStatistics,
} from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// select all users
router.get("/", selectAllUsers);

// select all sellers
router.get("/seller", selectAllSellers);

router.get("/username/:username", selectUserByUserName);

// count user per day, week, month
router.get("/count/buyer", countBuyer);

// count user per day, week, month
router.get("/count/seller", countSeller);

// count seller per day, week, month
router.get("/statistics", generalStatistics);

// select a user
router.get("/:id", selectUser);

// update user's password + other
router.patch("/password/:id", updateUserPassword);

// update user's delivery info
router.patch("/deliveryinfo/:id", updateDeliveryInfo);

//update user img
router.patch("/image/:id", updateUserImage);

//update a user
router.patch("/:id", updateUser);

//delete a user
router.delete("/:id", deleteUser);

export default router;
