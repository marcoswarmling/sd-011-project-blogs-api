require('dotenv').config();
const jwt = require('jsonwebtoken');
const userService = require('../services/userServices');

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.create({ displayName, email, password, image });
  const token = jwt.sign(user.dataValues, SECRET, jwtConfig);
  return res.status(201).json({ token });
};

module.exports = {
  create,
};
