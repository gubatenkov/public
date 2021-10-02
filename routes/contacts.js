import express from 'express';

import {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
  isContactDataValid,
} from '../controllers/contactController.js';

const router = express.Router();

router.route('/').get(getContacts).post(isContactDataValid, createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

export default router;
