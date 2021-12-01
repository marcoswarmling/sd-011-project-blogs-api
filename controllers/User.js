const { User } = require('../services');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  try {
    const token = await User.createUser({ displayName, email, password, image });

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await User.login(email, password);

    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

const getAllUsers = async (_req, res, next) => {
  try {
    const users = await User.getAllUsers();

    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
  login,
  getAllUsers,
};
