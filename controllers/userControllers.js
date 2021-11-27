const rescue = require('express-rescue');
const { User } = require('../models');
const { CONFLICT } = require('../utils/statusError');
const { USER_CONFLICT } = require('../utils/errorMessages');
const { createUser } = require('../services/userServices');

const create = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userEmail = await User.findOne({ where: { email } });
  
  if (userEmail) return res.status(CONFLICT).json(USER_CONFLICT);
  const token = await createUser(displayName, email, password, image);

  return res.status(201).json({ token });
});

module.exports = { create };
