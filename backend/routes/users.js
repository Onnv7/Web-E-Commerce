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
    countUser,
    selectAllSellers,
} from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// ! admin
// TODO: check using
// select all users
router.get("/", selectAllUsers);

router.get("/seller", selectAllSellers);

// ! admin
// TODO: check using
router.get("/username/:username", selectUserByUserName);

// ! admin
// TODO: check using
// count user per day, week, month
router.get("/count", countUser);

// ! user
// TODO: check using
// select a user
router.get("/:id", selectUser);

// ! user
// TODO: check using
// update user's password + other
router.patch("/password/:id", updateUserPassword);

// ! user
// TODO: check using
// update user's delivery info
router.patch("/deliveryinfo/:id", updateDeliveryInfo);

// ! user
// TODO: check using
//update user img
router.patch("/image/:id", updateUserImage);

// ! user
// TODO: check using
//update a user
router.patch("/:id", updateUser);

// ! admin
// TODO: check using
//delete a user
router.delete("/:id", deleteUser);

export default router;
