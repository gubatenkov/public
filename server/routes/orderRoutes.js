import express from 'express';
import { createOrder } from '../controllers/orderController.js';
import authMd from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(authMd, createOrder);

export default router;
