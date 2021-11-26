const UserService = require('../service/userService');
const {
  validator,
  validLogin,
} = require('../helpers/validator');

const create = async (req, res, next) => {
  const user = { ...req.body };
  const response = await UserService.create(user, validator);
  if (response.message) return next(response);
  return res.status(201).json(response);
};

const login = async (req, res, next) => {
  const user = { ...req.body };
  const response = await UserService.login(user, validLogin);
  if (response.message) return next(response);
  return res.status(200).json(response);
};

module.exports = {
  login,
  create,
};