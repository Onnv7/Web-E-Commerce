import Shop from "../models/shopModel.js";
import User from "../models/userModel.js";
import { updateUser } from "./userController.js";
const upLevelSeller = async function(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    await User.updateOne(
      { _id: req.params.id},
      { $set: {role: "buyer"}},
    );
  } catch (err) {
    //next(err);
  }
};

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
export const updateShop = async (req, res, next) => {
  try {
      const updatedShop = await Shop.updateOne(
          {user: req.params.id}, 
          { $set: req.body}, 
          {new: true }
          );
      res.status(200).json(updatedShop);
  } catch (err) {
      next(err);
  }
};

export const deleteShop = async (req, res, next) => {
  try {
      await Shop.deleteOne(
          {_id: req.params.id}
          );
      res.status(200).json("Shop has been deleted");
  } catch (err) {
      next(err);
  }
};

export const getShop = async (req, res, next) => {
  try {
      const shop = await Shop.findOne(
          {user: req.params.id}
          );
      res.status(200).json(shop);
  } catch (err) {
      next(err);
  }
};

export const getAllShop = async (req, res, next) => {
  try {
      const shop = await Shop.find();
      res.status(200).json(shop);
  } catch (err) {
      next(err);
  }
};


