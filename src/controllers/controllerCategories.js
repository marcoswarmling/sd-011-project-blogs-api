const servicesCategories = require('../services/servicesCategories');

const createCategories = async (req, res) => {
  const newCategorie = await servicesCategories.createCategories(req.body);
  if (newCategorie.message) {
    return res.status(201).json({ message: newCategorie.message });
  }
  return res.status(201).json(newCategorie);
};

const allCategories = async (_req, res) => {
  const allcategories = await servicesCategories.allcategories();
  if (allcategories.message) {
    return res.status(201).json({ message: allcategories.message });
  }
  return res.status(201).json(allcategories);
};

module.exports = {
  createCategories,
  allCategories,
};
