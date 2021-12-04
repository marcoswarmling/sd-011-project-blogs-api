const userSevice = require('../services/userService');

async function findOrCreate(req, res) {
  const { displayName, email, password, image } = req.body;
  const userToken = await userSevice.findOrCreate(displayName, email, password, image);

  return res.status(201).json({ token: userToken });
}

async function findOne(req, res) {
  const { email } = req.body;
  const userToken = await userSevice.findOne(email);

  return res.status(200).json({ token: userToken });
}

async function getAllUsers(req, res) {
  const users = await userSevice.getAllUsers();

  return res.status(200).json(users);
}

async function getUser(req, res) {
  const { id } = req.params;
  const user = await userSevice.getUser(id);

  return res.status(200).json(user);
}

module.exports = {
  findOrCreate,
  findOne,
  getAllUsers,
  getUser,
};
