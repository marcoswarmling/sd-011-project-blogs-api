const { Users } = require('../models');
const { generateToken } = require('../auth');

async function addNewUser(req, res) {
  const { displayName, email, password, image } = req.body;

  await Users.create({
    displayName,
    email,
    password,
    image,
  }).catch(() =>
    res.status(500).json({
      erro: 'Erro interno',
    }));

  const token = generateToken({ displayName, email });

  return res.status(201).send({ token });
}

module.exports = {
  addNewUser,
};
