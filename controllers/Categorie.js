const { Categorie } = require('../models');
const { validateCategorie } = require('../middlewares/Validations');

const create = async (req, res) => {
  const error = validateCategorie(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { name } = req.body;

  const newCategorie = await Categorie.create({ name });

  res.status(201).json(newCategorie);
};

const getAll = async (_req, res) => {
  const categories = await Categorie.findAll();

  res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};
