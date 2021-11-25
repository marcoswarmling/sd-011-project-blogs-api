const UsersService = require('../services/usersService');

const createUser = async (req, res) => {
  const { email, password, displayName, image } = req.body;

  const user = await UsersService.create(displayName, email, password, image);

  if (user.message === 'User already registered') {
    return res.status(409).json(user);
  }

  if (user && !user.token) {
    return res.status(400).json(user);
  }

  return res.status(201).json(user);
};

module.exports = { createUser };
