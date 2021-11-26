const { Users } = require('../models');

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

  return res.status(201).send({
    displayName,
    email,
    password,
    image,
  });
}

module.exports = {
  addNewUser,
};
