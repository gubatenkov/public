import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @description     Register new user
// @route           POST /api/users
// @access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // before register new user search existing in BD by email
    const checkedUser = await User.findOne({ email });
    // if user already registered send response
    if (checkedUser) {
      return res.status(400).json({
        status: 'failed',
        data: {
          message: `User with email @${email} already exist`,
          timestamp: new Date().toLocaleString(),
        },
      });
    }
    // create new user
    const user = await User.create({
      name,
      email,
      password,
    });
    // if all OK send response with new user data
    if (user) {
      return res.status(201).json({
        status: 'success',
        data: {
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
          },
        },
      });
    }
  } catch (err) {
    // alternatively send response with catched err info
    res.status(500).json({
      status: 'error',
      data: {
        message: `Error when trying to create new user. ${err.message}`,
        timestamp: new Date().toLocaleString(),
      },
    });
  }
});

// @description     Auth user & get token
// @route           POST /api/users/login
// @access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    // search existing user by email in BD
    const user = await User.findOne({ email });
    // if user EXIST and passwords match
    if (user && (await user.matchPassword(password))) {
      // send OK and user data
      return res.status(200).json({
        status: 'success',
        data: {
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
          },
        },
      });
    } else {
      // send response if user not found
      return res.status(404).json({
        status: 'failed',
        data: {
          message: 'There is no user with provided credentials',
          timestamp: new Date().toLocaleString(),
        },
      });
    }
  } catch (err) {
    // alternatively send response with catched err info
    res.status(500).json({
      status: 'error',
      data: {
        message: `There is an error trying to login user. ${err.message}`,
        timestamp: new Date().toLocaleString(),
      },
    });
  }
});

// @description     Update user profile
// @route           PUT /api/users/profile
// @access          Private
const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    // search user by id in DB
    const user = await User.findById(req.user._id);

    if (user) {
      const { name, email, password } = req.body;
      // changing user data
      user.name = name || user.name;
      user.email = email || user.email;
      if (password) user.password = password;
      // save changes to DB
      const updatedUser = await user.save();
      // finally response with updated user data
      return res.status(200).json({
        status: 'success',
        data: {
          updatedUser: {
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
          },
        },
      });
    } else {
      return res.status(500).json({
        status: 'failed',
        data: {
          message: `Something goes wrong trying to update user profile.`,
          timestamp: new Date().toLocaleString(),
        },
      });
    }
  } catch (err) {
    // alternatively send response with catched err info
    res.status(500).json({
      status: 'error',
      data: {
        message: `There is an error trying to update user profile. ${err.message}`,
        timestamp: new Date().toLocaleString(),
      },
    });
  }
});

// @description     Get user profile
// @route           GET /api/users/profile
// @access          Private
const getUserProfile = asyncHandler(async (req, res) => {
  try {
    // search user by id in DB
    const user = await User.findById(req.user._id);
    // if user found response
    if (user) {
      return res.status(200).json({
        status: 'success',
        data: {
          userProfile: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          },
        },
      });
    } else {
      return res.status(400).json({
        status: 'failed',
        data: {
          message: 'Something goes wrong trying to get user profile',
          timestamp: new Date().toLocaleString(),
        },
      });
    }
  } catch (err) {
    // alternatively send response with catched err info
    res.status(500).json({
      status: 'error',
      data: {
        message: `There is an error trying to get user profile. ${err.message}`,
        timestamp: new Date().toLocaleString(),
      },
    });
  }
});

export { authUser, registerUser, getUserProfile, updateUserProfile };
