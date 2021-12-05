const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { User } = require('../models');

const createUser = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const emailExists = await User.findOne({ where: { email } });

  if (emailExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  await User.create({
    displayName,
    email,
    password,
    image,
  });

  const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET);

  res.status(201).json(token);
});

const userLogin = rescue(async (req, res) => {
  const { email, password } = req.body;
  const emailExists = await User.findOne({ where: { email, password } });

  if (!emailExists) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ email, password }, process.env.JWT_SECRET);

  res.status(200).json(token);
});

module.exports = {
  createUser,
  userLogin,
};