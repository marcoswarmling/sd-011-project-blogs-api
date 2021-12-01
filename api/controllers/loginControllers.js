const usersServices = require('../services/usersServices');

const createLogin = async (req, res) => {
  const newUser = req.body;

  const token = await usersServices.createLogin(newUser);

  return res.status(200).json({ token });
};

module.exports = {
  createLogin,
};
