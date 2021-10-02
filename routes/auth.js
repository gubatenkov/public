import express from 'express';
import {
  loginUser,
  getLoggedUser,
  validateEmailAndPass,
} from '../controllers/authController.js';
import { validateAuthToken } from '../middleware/auth.js';

const router = express.Router();

router
  .route('/')
  .get(validateAuthToken, getLoggedUser)
  .post(validateEmailAndPass, loginUser);

export default router;
