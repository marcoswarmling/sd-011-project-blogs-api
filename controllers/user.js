const User = require('../services/user');
const ValidationJWT = require('../middlewares/ValidationJWT');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const user = await User.createUser(displayName, email, password, image);
  if (user.err) return next(user.err);
  const token = ValidationJWT.createToken(email);

  return res.status(201).json({ token });
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.userLogin(email, password);
  if (user.err) return next(user.err);
  const token = ValidationJWT.createToken(email);

  return res.status(200).json({ token });
};

const getAllUsers = async (_req, res, _next) => {
  const users = await User.getAllUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.getUserById(id);
  if (user.err) return next(user.err);

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  userLogin,
  getAllUsers,
  getUserById,
};