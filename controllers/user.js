const Service = require('../services/user');

const createUser = async (req, res) => {
  const data = req.body;
  const result = await Service.createUser(data);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(201).json({ token: result.token });
};

const login = async (req, res) => {
  const data = req.body;
  const result = await Service.validateLogin(data);

  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(200).json({ token: result.token });
};

module.exports = {
  createUser,
  login,
};