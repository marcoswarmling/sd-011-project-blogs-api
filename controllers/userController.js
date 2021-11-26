const UserService = require('../service/userService');
const validator = require('../helpers/validator');

const create = async (req, res, next) => {
  const user = { ...req.body };
  const response = await UserService.create(user, validator);
  if (response.message) return next(response);
  return res.status(201).json(response);
};

module.exports = {
  create,
};