const { Categories } = require('../models');

const getAll = async (req, res) => {
  const attributes = { exclude: ['createdAt', 'updatedAt'] };
  const response = await Categories.findAll({ attributes });
  return res.status(200).json(response);
};

const create = async (req, res) => {
  try {
    const response = await Categories.create({ name: req.body.name });
    const { dataValues: { id, name } } = response; 
    return res.status(201).json({ id, name });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, create };