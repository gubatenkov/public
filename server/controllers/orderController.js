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
    totalPrice,
    finalPrice,
  } = req.body;

  if (orderItems?.length <= 0) {
    return res.status(400).json({
      status: 'rejected',
      data: {
        message: 'there is no order items in request body',
        timestamp: new Date().toLocaleString(),
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
        totalPrice,
        finalPrice,
      });
      const order = await newOrder.save();
      return res.status(200).json({
        status: 'success',
        data: {
          message: 'order has been created',
          order,
          timestamp: new Date().toLocaleString(),
        },
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        data: {
          message: `there is an error trying create new order. Message: ${err.message}`,
          timestamp: new Date().toLocaleString(),
        },
      });
    }
  }
});

//@desc       get order by id
//@route      GET /api/orders/:id
//@access     private
export const getOrderById = asyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    );
    if (order) {
      return res.status(200).json({
        status: 'success',
        data: {
          order,
        },
      });
    } else {
      return res.status(404).json({
        status: 'failed',
        data: {
          message: `order:${req.params.id} not found`,
        },
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      message: `error happend trying to get order by id. Message: ${err.message}`,
    });
  }
});

//@desc       pay order by id
//@route      GET /api/orders/:id/pay
//@access     private
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  try {
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
    }
    const paidOrder = await order.save();
    return res.status(200).json({
      status: 'success',
      data: {
        message: `order:${req.params.id} has been paid`,
      },
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      data: {
        message: `An error happend when paying order:${req.params.id}. Message: ${err.message}`,
      },
    });
  }
});
