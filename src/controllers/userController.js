const { createdUser } = require('../services/userServices');

const createNewUser = async (req, res) => {
  const user = await createdUser(req.body);
  return res.status(201).json(user);
};

module.exports = { createNewUser };