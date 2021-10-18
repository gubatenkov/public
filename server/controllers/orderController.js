import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

//@desc         create new order
//@route        POST /api/orders
//@access       private
export const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    itemsPrice,
    shippingPrice,
    shippingAddress,
    taxPrice,
    paymentMethod,
  } = req.body;

  if (orderItems?.length <= 0) {
    return res.status(400).json({
      status: 'rejected',
      data: {
        message: 'there is no order items in request body',
      },
    });
  } else {
    try {
      const newOrder = new Order({
        orderItems,
        itemsPrice,
        user: req.user._id,
        shippingAddress,
        shippingPrice,
        paymentMethod,
        taxPrice,
      });
      const order = await newOrder.save();
      return res.status(200).json({
        status: 'success',
        data: {
          message: 'order has been created',
          order,
        },
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        data: {
          message: `there is an error trying create new order. Message: ${err.message}`,
        },
      });
    }
  }
});
