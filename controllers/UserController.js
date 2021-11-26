const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await UserService.createNewUser(displayName, email, password, image);

    const token = jwt.sign({ displayName, email }, secret, jwtConfig);
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  create,
}; 