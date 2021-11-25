const usersService = require('../services/users');

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const emailExists = await usersService.isEmailRegistered(email);

  if (emailExists) {
    return next({ code: 'emailExists', message: 'User already registered' });
  }

  const token = await usersService.createUser(displayName, email, password, image);

  res.status(201).json({ token });
};

module.exports = {
  createUser,
};
