import express from "express";
import {
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

//update a user
router.patch("/:id", updateUser);

// update user's password + other
router.patch("/:id", updateUserPassword);

//delete a user
router.delete("/:id", deleteUser);

export default router;
