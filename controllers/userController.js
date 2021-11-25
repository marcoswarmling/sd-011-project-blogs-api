const { createUserService } = require('../services/userServices');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const token = await createUserService(displayName, email, password, image);
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};