const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = '123456';

const jwtConfig = {
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await User.create({ displayName, email, password, image });
    const token = jwt.sign({ data: newUser }, secret, jwtConfig);

    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = {
  createUser,
};
