import Shop from "../models/shopModel.js";
import Category from "../models/CategoryModel.js";
import { updateUser } from "./userController.js";

export const insertCategory = async (req, res, next) => {
  try {
    // cach 1 khong unique name
      // const updatedCategory = await Shop.findById(req.params.idShop);
      // updatedCategory.category.push({name: req.body.name});
      // updatedCategory.save();
    // cach 2 co unique name
      const updatedCategory = await Shop.updateOne(
        {_id: req.params.idShop,
        'category.name': { $ne: req.body.name}},
        { $push: { category: {name: req.body.name}}}
      )
      res.status(200).json(updatedCategory);
  } catch (err) {
      next(err);
  }
};

export const selectCategory = async (req, res, next) => {
  try {
      const result = await Shop.findOne(
        {shop: req.params.idShop },
        
        )
        .select('category');
      res.status(200).json(result.category);
  } catch (err) {
      next(err);
  }
};
export const deleteCategory = async (req, res, next) => {
  try {
      const result = await Shop.updateOne(
          {shop: req.params.idShop}, 
          { $pull: { category: {_id: req.params.idCgr}}}, 
          {new: true }
          );

      res.status(200).json(result);
  } catch (err) {
      next(err);
  }
};

export const updateNameCategory = async (req, res, next) => {
  
  

  try {
    const result = await Shop.findOne( {shop: req.params.idShop } )
      .select('category');
      for(let i= 0; i < result.category.length; i++) {
        if(result.category[i].name === req.body.name 
          && result.category[i]._id !== req.params.idCgr) 
        {
          res.status(501).json("Duplicate name")
        }
      }
      const doc = await Shop.updateOne(
              { _id: req.params.idShop, 'category._id': req.params.idCgr},
              { 'category.$.name': req.body.name }
            )
            // upadate name and quantity
      // const doc = await Shop.findOne(
      //         { _id: req.params.idShop},
      //         { category: 1}
      //       )
      // req.body.quantity == null ? data.quantity : req.body.quantity;
      // // doc.update({'category.name': req.body.name, 
      // //              'category.$.quantity': req.body.quantity})

      // const rs = await Shop.updateOne(
      //         { _id: req.params.idShop, 'category._id': req.params.idCgr},
      //         { 'category.$.name': req.body.name,
      //           'category.$.quantity': req.body.quantity }
      //       )
      res.status(200).json(doc);
  } catch (err) {
      next(err);
  }
};

export const updateQuantityCategory = async (req, res, next) => {
  
  try {
    const doc = await Shop.updateOne(
      { _id: req.params.idShop, 'category._id': req.params.idCgr},
      { 'category.$.quantity': req.body.quantity }
    )
    res.status(200).json(doc);
  } catch (err) {
      next(err);
  }
};