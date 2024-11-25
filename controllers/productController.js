const Product = require("../Models/Product");

// get all the products
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});

    res.status(200).json({ product });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "server error", error: err.message });
  }
};

// get single product
const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ msg: "please provide id" });
  }
  try {
    const product = await Product.findOne({ _id: id });
    res.status(200).json({ product });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "server error", error: err.message });
  }
};
// create product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json({ msg: "product inserted", product });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "server error", error: err.message });
  }
};
// update product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ msg: "please provide id" });
  }
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json({ msg: "product updated successfully", product });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "server error", error: err.message });
  }
};
// delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ msg: "please provide id" });
  }
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.status(200).json({ msg: "product deleted successfully",product });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ msg: "server error", error: err.message });
  }
};
module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
