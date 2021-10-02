import { check, validationResult } from 'express-validator';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET;

// @route     GET /api/users/:id
// @desc      get particular user
// @access    private
const getUser = async (req, res) => {
  const id = req.params.id;
  let user;
  try {
    // connect to DB to find particular user
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    res.status(404).json({
      status: 'failed',
      message: `user with id:${id} not found`,
    });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        user: `user with id:${id}`,
      },
    });
  }
};

// @route     GET /api/users
// @desc      get all users
// @access    public
const getUsers = async (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      users: 'all users',
    },
  });
};

// @route     POST /api/users
// @desc      create new user
// @access    public
export const validateUserBeforeCreate = [
  check('name', 'check the name').not().isEmpty(),
  check('email', 'check an email').isEmail(),
  check('password', 'password > 5 chars').isLength({ min: 5 }),
];

const createUser = async (req, res) => {
  const errors = validationResult(req);
  // if data is not valid send errors array
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      errors: errors.array(),
    });
  }

  const { name, email, password } = req.body;

  try {
    // try to find existing user
    let user = await User.findOne({ email });
    // if user exist send response
    if (user) {
      return res.json({
        status: 'failed',
        message: `user with email:${email} already exist`,
      });
    }
    // if not, gen async salt and hash for user password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    user = await new User({ name, email, password: hashedPass });
    // then save created user in DB
    await user.save();
    // prepare user data to encrypt
    const payload = {
      user: {
        id: user.id,
      },
    };
    // generate token with payload
    const token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: '10d' });
    // finnally response to the client
    return res.status(200).json({
      status: 'success',
      message: 'user created',
      data: {
        id: user._id,
        created: user.createdAt,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: 'error',
      message: err.message,
    });
  }
};

// @route     PATCH /api/users/:id
// @desc      update particular user
// @access    private
const updateUser = async (req, res) => {
  res.json({
    status: 'success',
    data: {
      user: 'user updated',
    },
  });
};

// @route     DELETE /api/users/:id
// @desc      delete particular user
// @access    private
const deleteUser = async (req, res) => {
  res.json({
    status: 'success',
    data: {
      user: 'user deleted',
    },
  });
};

export { getUsers, createUser, updateUser, getUser, deleteUser };
