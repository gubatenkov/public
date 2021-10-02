import Contact from '../models/Contact.js';
import { check, validationResult } from 'express-validator';

// @route     GET /contacts
// @desc      get all contacts
// @access    private
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.status(200).json({
      status: 'success',
      data: {
        contacts,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'cant get requested contacts',
    });
  }
};

// @route     POST /contacts
// @desc      create contact
// @access    private
export const isContactDataValid = [
  check('name', 'name is required').not().isEmpty(),
];

const createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.array(),
    });
  }

  const { name, email, phone, type } = req.body;

  try {
    const contact = await Contact.create({
      user: req.user.id,
      name,
      email,
      phone,
      type,
    });

    res.status(200).json({
      status: 'success',
      message: 'contact created',
      data: {
        contact,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `there is an error when trying to create new contact. Message:${err.message}`,
    });
  }
};

// @route     GET /contacts/:id
// @desc      get contact
// @access    private
const getContact = async (req, res) => {};

// @route     PUT /contacts/:id
// @desc      update contact
// @access    private
const updateContact = async (req, res) => {
  const { name, email, phone, type } = req.body;
  const updated = {};

  if (name) updated.name = name;
  if (email) updated.email = email;
  if (phone) updated.phone = phone;
  if (type) updated.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        status: 'failed',
        message: 'reqested contact not found',
      });
    }

    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({
        status: 'failed',
        message:
          'cant update contact. reason: you can update only contacts created by yourself.',
      });
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: updated },
      { new: true }
    );
    return res.status(200).json({
      status: 'success',
      message: 'contact updated',
      data: {
        contact,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `failed to update contact. reason:${err.message}`,
    });
  }
};

// @route     DELETE /contacts/:id
// @desc      delete contact
// @access    private
const deleteContact = async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    // if contact not exist
    if (!contact) {
      return res.status(404).json({
        status: 'failed',
        message: 'cant delete contact. reason: contact not found',
      });
    }
    // check if user want to delete his own contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({
        status: 'failed',
        message:
          'cant delete contact. reason: you can delete only contacts created by yourself.',
      });
    }
    // if all OK delete contact
    contact = await Contact.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: 'success',
      message: 'contact was deleted',
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `cant delete contact. reason: ${err.message}`,
    });
  }
};

export { getContacts, getContact, createContact, updateContact, deleteContact };
