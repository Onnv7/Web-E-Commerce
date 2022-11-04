import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/userController.js"
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
// router.post("/", createUser);

// CRUD users
//update
router.put("/:id", verifyUser, updateUser);
//delete
router.delete("/:id", verifyUser, deleteUser);
//get
router.get("/:id", verifyUser, getUser);
//get all
router.get("/", getUsers);


export default router