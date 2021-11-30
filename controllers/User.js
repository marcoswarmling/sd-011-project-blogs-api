const jwt = require('jsonwebtoken');
const { User } = require('../services');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSecret = process.env.JWT_SECRET || 'secret';

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  try {
    await User.createUser({ displayName, email, password, image });

    const token = await jwt.sign({ displayName, email }, jwtSecret, jwtConfig);

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
};
