const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/userService');

const userRegister = rescue(async (req, res, next) => {
  const { error } = joi.object({
    displayName: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    image: joi.string(),
  }).validate(req.body);

  if (error) return next(error);

  const { displayName, email, password, image } = req.body;

  const result = await service.userRegister({ displayName, email, password, image });
  if (result.error) return next(result.error);
  return res.status(201).json(result);
});

const getAllUsers = rescue(async (req, res, next) => {
  const { email } = req.user;

  const users = await service.getAllUsers(email);
  if (users.error) return next(users.error);
  return res.status(200).json(users);
});

const getUserById = rescue(async (req, res, next) => {
  const { email } = req.user;
  const { id } = req.params;

  const selectedUser = await service.getUserById(id, email);
  if (selectedUser.error) return next(selectedUser.error);
  return res.status(200).json(selectedUser);
});

module.exports = {
  userRegister,
  getAllUsers,
  getUserById,
};
