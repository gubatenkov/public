import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET;

const validateAuthToken = async (req, res, next) => {
  // get token
  const token = req.header('Authorization');
  // if no token send 401
  if (!token) {
    return res.status(401).json({
      status: 'failed',
      message: 'access denied. need authorization',
    });
  }
  // if token, decode it
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET);
    // req.user = decoded.user;
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

export { validateAuthToken };
