import { check, validationResult } from 'express-validator';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET;

// @route     GET /api/auth
// @desc      get logged in user
// @access    private
const getLoggedUser = async (req, res) => {
  try {
    // find user in DB by id from auth token without pass
    const user = await User.findById(req.user.id).select('-password');
    // send this user to the client
    return res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// @route     POST /api/auth
// @desc      login user
// @access    public
export const validateEmailAndPass = [
  check('email', 'check the email').isEmail(),
  check('password', 'password > 5 characters').isLength({ min: 5 }),
];

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  // if data is not valid send errors array
  if (!errors.isEmpty()) {
    return res.json({
      status: 'error',
      errors: errors.array(),
    });
  }

  const { email, password } = req.body;

  try {
    // find user with provided credentials in Db
    let user = await User.findOne({ email });
    // if there is no such user, send back message
    if (!user) {
      return res.json({
        status: 'failed',
        message: `user with email:${email} not found`,
      });
    }
    // otherwise compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    // if passwords is different
    if (!isMatch) {
      return res.json({
        status: 'failed',
        message: 'auth failed. invalid password',
      });
    }
    // prepare data to encrypt
    const payload = {
      user: {
        id: user.id,
      },
    };
    // generate token with data
    const token = jwt.sign(payload, TOKEN_SECRET, { expiresIn: '10d' });
    // send response obj
    return res.status(200).json({
      status: 'success',
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
    return res.json({ status: 'error', message: err.message });
  }
};

export { getLoggedUser, loginUser };
