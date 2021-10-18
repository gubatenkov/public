import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import authMd from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/register').post(registerUser);
router.post('/login', authUser);
router
  .route('/profile')
  .get(authMd, getUserProfile)
  .put(authMd, updateUserProfile);

export default router;
