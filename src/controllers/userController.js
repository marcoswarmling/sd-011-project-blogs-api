const userSevice = require('../services/userService');

async function findOrCreate(req, res) {
  const { displayName, email, password, image } = req.body;
  const userToken = await userSevice.findOrCreate(displayName, email, password, image);

  return res.status(201).json({ token: userToken });
}

module.exports = {
  findOrCreate,
};
