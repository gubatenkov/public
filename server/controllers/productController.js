import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @description     Fetch all products
// @route           GET /api/products
// @access          Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({
    status: 'success',
    data: {
      products,
    },
  });
});

// @description     Fetch product by Id
// @route           GET /api/product/:id
// @access          Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } else {
    res.status(404).json({
      status: 'failed',
      data: {
        message: 'Requested product not found',
      },
    });
  }
});

export { getProducts, getProductById };
