const rescue = require('express-rescue');
const { User } = require('../models');
const { CONFLICT, NOT_FOUND } = require('../utils/statusError');
const { USER_CONFLICT, USER_EXISTS } = require('../utils/errorMessages');
const { createUser, getAllUsers, getUserByPk } = require('../services/userServices');

const create = rescue(async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const userEmail = await User.findOne({ where: { email } });
  
  if (userEmail) return res.status(CONFLICT).json(USER_CONFLICT);
  const token = await createUser(displayName, email, password, image);

  return res.status(201).json({ token });
});

const getUsers = rescue(async (_req, res) => {
  const users = await getAllUsers();
  return res.status(200).json(users);
});

const getUserById = rescue(async (req, res) => {
  const { id } = req.params;
  const user = await getUserByPk(id);

  if (!user) return res.status(NOT_FOUND).json(USER_EXISTS);

  return res.status(200).json(user);
});

module.exports = { create, getUsers, getUserById };
