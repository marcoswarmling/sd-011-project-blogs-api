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

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userServices.getById(id);

  if (user.message) return res.status(404).json({ message: user.message });

  return res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};
