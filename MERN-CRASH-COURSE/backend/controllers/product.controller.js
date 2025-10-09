import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); //{} -> fetch all products from DB
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(`Couldn't fetch the products because of error: ${error}`);
    res.status(500).json({
      success: false,
      message: `Couldn't fetch the products because of error: ${error}`,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide all fields" });
    }
    //create new model
    const newProduct = new Product(product);
    //save new product to DB
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  //   console.log("id: ", id);
  //   console.log(req.params);
  try {
    if (!mongoose.Types.ObjectId(id)) {
      res.status(404).json({ success: 0, message: `Provide a valid id` });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: `Product id:${id} has been found and deleted.`,
    });
  } catch (err) {
    res.status(500).json({
      succes: false,
      message: `Could not find and delete product with id ${id}. Error: ${err}`,
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: 0, message: `Please provide a valid id` });
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: 1,
      message: `Successfully updated product : ${updatedProduct}`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ succes: 0, message: `Could not update product with id: ${id}` });
  }
};
