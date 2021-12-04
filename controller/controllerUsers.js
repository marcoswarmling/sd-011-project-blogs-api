const { Users } = require('../models');
const { generateToken } = require('../auth');

async function addNewUser(req, res) {
  const { displayName, email, password, image } = req.body;

  const result = await Users.create({
    displayName,
    email,
    password,
    image,
  }).catch(() =>
    res.status(500).json({
      erro: 'Erro interno',
    }));

  const token = generateToken({
    displayName: result.displayName,
    email: result.email,
  });

  return res.status(201).send({ token });
}

async function getUsers(req, res) {
  const result = await Users.findAll()
    .catch(() =>
      res.status(500).json({ message: 'Erro Interno' }));
  res.status(200).json(result);
}

async function getUser(req, res) {
  const { id } = req.params;
  const result = await Users.findOne({ where: { id } })
    .catch(() =>
      res.status(500).json({ message: 'Erro Interno' }));
  if (!result) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  res.status(200).json(result);
}

async function deleteUser(req, res) {
  const { id } = req.userInfo;
  await Users.destroy({ where: { id } });
  res.status(204).send();
}

module.exports = {
  addNewUser,
  getUsers,
  getUser,
  deleteUser,
};
