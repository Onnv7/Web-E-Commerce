import Shop from "../models/shopModel.js";
import Category from "../models/CategoryModel.js";
import { updateUser } from "./userController.js";

// create a new category and push it into the shop's category list
export const createCategory = async (req, res, next) => {
  try {
    const createCategory = await Shop.updateOne(
      {
        _id: req.params.shopId,
        'category.name': { $ne: req.body.name }
      },
      { $push: { category: { name: req.body.name } } }
    )
    res.status(200).json(createCategory);
  } catch (err) {
    next(err);
  }
};

// select all shop's categories by shop id
export const selectAllCategory = async (req, res, next) => {
  try {
    const result = await Shop.findOne(
      { shop: req.params.shopId },
    )
      .select('category');
    res.status(200).json(result.category);
  } catch (err) {
    next(err);
  }
};

// delete shop's category by shop id
export const deleteCategory = async (req, res, next) => {
  try {
    const result = await Shop.updateOne(
      { shop: req.params.shopId },
      { $pull: { category: { _id: req.params.cgrId } } },
      { new: true }
    );

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

// update  category's name by shop id and category id
export const updateCategoryName = async (req, res, next) => {
  try {
    const result = await Shop.findOne({ shop: req.params.shopId })
      .select('category');
    for (let i = 0; i < result.category.length; i++) {
      if (result.category[i].name === req.body.name
        && result.category[i]._id !== req.params.cgrId) {
        res.status(501).json("Duplicate name")
      }
    }
    const doc = await Shop.updateOne(
      { _id: req.params.shopId, 'category._id': req.params.cgrId },
      { 'category.$.name': req.body.name }
    )
    res.status(200).json(doc);
  } catch (err) {
    next(err);
  }
};

// update category's quantity by shop id and category id
export const updateCategoryQuantity = async (req, res, next) => {
  try {
    const doc = await Shop.updateOne(
      { _id: req.params.shopId, 'category._id': req.params.cgrId },
      { 'category.$.quantity': req.body.quantity }
    )
    res.status(200).json(doc);
  } catch (err) {
    next(err);
  }
};