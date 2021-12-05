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

async function findAll(req, res) {
  const user = await usersService.findAll();

  return res.status(200).json(user);
}

async function findByPk(req, res) {
  const { id } = req.params;

  const user = await usersService.findByPk({ id });

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
}

module.exports = {
  create,
  login,
  findAll,
  findByPk,
};
