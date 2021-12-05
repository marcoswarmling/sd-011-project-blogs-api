const categoriesService = require('../services/categoriesService');

async function create(req, res) {
  const { name } = req.body;

  const category = await categoriesService.create({
    name,
  });

  return res.status(201).json(category);
}

async function findAll(req, res) {
  const categories = await categoriesService.findAll();

  return res.status(200).json(categories);
}

module.exports = {
  create,
  findAll,
};
