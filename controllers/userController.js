const rescue = require('express-rescue');
const userServices = require('../services/userService');
const { User } = require('../models');

const createUsers = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userEmail = await User.findOne({ where: { email } }); 
  if (userEmail) return res.status(409).json({ message: 'User already registered' });
  const newUsers = await userServices.createUser({ displayName, email, password, image });
  return res.status(201).json({ token: newUsers });
});

module.exports = { createUsers };