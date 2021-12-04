const usersService = require('../services/usersService');

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
};
