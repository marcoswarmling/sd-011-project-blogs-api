const postsServices = require('../services/Posts');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { userId } = req.userData;
  const response = await postsServices.create({ userId, title, content, categoryIds });
  const { message } = response;
  if (message) {
    return res.status(400).json(response);
  }
  return res.status(201).json(response);
};

const getAll = async (_req, res) => {
  const response = await postsServices.getAll();
  return res.status(200).json(response);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const response = await postsServices.getById(id);
  const { message } = response;
  if (message) {
    return res.status(404).json(response);
  }
  return res.status(200).json(response);
};

module.exports = {
  create,
  getAll,
  getById,
};