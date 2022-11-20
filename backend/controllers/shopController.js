import Shop from "../models/shopModel.js";
import User from "../models/userModel.js";
import { updateUser } from "./userController.js";
const upLevelSeller = async function (req, res, next) {
  try {
    await User.updateOne(
      { _id: req.params.id },
      { $set: { role: "buyer" } },
    );
  } catch (err) {
    //next(err);
  }
};

// create a new shop and up level for user => buyer
export const createShop = async (req, res, next) => {
  try {
    upLevelSeller(req, res, next);
    const newShop = new Shop({
      ...req.body,
    });
    await newShop.save();
    res.status(200).send("Shop has been created.");
  } catch (err) {
    next(err);
  }
};

// update a shop
export const updateShop = async (req, res, next) => {
  try {
    const updatedShop = await Shop.updateOne(
      { user: req.params.userId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedShop);
  } catch (err) {
    next(err);
  }
};

// delete a shop
export const deleteShop = async (req, res, next) => {
  try {
    await Shop.deleteOne(
      { user: req.params.userId }
    );
    res.status(200).json("Shop has been deleted");
  } catch (err) {
    next(err);
  }
};

// select shop by user id
export const selectShop = async (req, res, next) => {
  try {
    const shop = await Shop.findOne(
      { user: req.params.userId }
    );
    res.status(200).json(shop);
  } catch (err) {
    next(err);
  }
};

// select all shop
export const selectAllShop = async (req, res, next) => {
  try {
    const shop = await Shop.find();
    res.status(200).json(shop);
  } catch (err) {
    next(err);
  }
};


