const userServices = require('../services/userServices');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const token = await userServices.create(displayName, email, password, image);
  
  return res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const users = await userServices.getAll();

  return res.status(200).json(users);
};

module.exports = {
  create,
  getAll,
};
