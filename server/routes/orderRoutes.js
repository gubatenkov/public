import express from 'express';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
} from '../controllers/orderController.js';
import authMd from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(authMd, createOrder);
router.route('/:id').get(authMd, getOrderById);
router.route('/:id/pay').put(authMd, updateOrderToPaid);

export default router;
