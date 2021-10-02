import express from 'express';
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  validateUserBeforeCreate,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(getUsers).post(validateUserBeforeCreate, createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
