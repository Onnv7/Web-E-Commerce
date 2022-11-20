import User from "../models/userModel.js";
import bcrypt from "bcryptjs";


// update user
export const updateUser = async (req, res, next) => {
  try {
    const userID = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(
      userID,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

// update user's password + other
export const updateUserPassword = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const body = { ...req.body, password: hash };
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

// delete a user
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
};

// select a user
export const selectUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// select all users
export const selectAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
