const userSevice = require('../services/userService');

async function createUser(req, res) {
  const { displayName, email, password, image } = req.body;
  const newUser = await userSevice.createUser(displayName, email, password, image);

  return res.status(201).json({ newUser });
}

module.exports = {
  createUser,
};
