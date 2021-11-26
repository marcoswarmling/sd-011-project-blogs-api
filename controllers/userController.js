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

const getAll = async (req, res, _next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const users = await UserService.getAll(authorization);
  
  if (users.message) return res.status(401).json({ message: users.message });

  res.status(200).json(users);
};

const getById = async (req, res, _next) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  const user = await UserService.getById(id, authorization);

  if (user.message) {
    const status = user.message === 'User does not exist' ? 404 : 401;
    return res.status(status).json({ message: user.message });
  }

  res.status(200).json(user);
};

module.exports = {
  getById,
  getAll,
  login,
  create,
};