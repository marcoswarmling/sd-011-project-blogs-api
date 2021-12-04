const usersService = require('../services/usersService');

async function login(req, res) {
  const { email, password } = req.body;

  const token = await usersService.login({ email, password });

  return res.status(200).json(token);
}

async function create(req, res) {
  const { displayName, email, password, image } = req.body;

  const user = await usersService.create({
    displayName,
    email,
    password,
    image,
  });

  return res.status(201).json(user);
}

module.exports = {
  create,
  login,
};
