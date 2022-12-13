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
} from "../controllers/userController.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// select all users
router.get("/", selectAllUsers);

router.get("/username/:username", selectUserByUserName);

// select a user
router.get("/:id", selectUser);

// update user's password + other
router.patch("/password/:id", updateUserPassword);

// update user's password + other
router.patch("/deliveryinfo/:id", updateDeliveryInfo);

//update user img
router.patch("/image/:id", updateUserImage);

//update a user
router.patch("/:id", updateUser);

//delete a user
router.delete("/:id", deleteUser);

export default router;
