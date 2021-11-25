const servicesPosts = require('../services/servicesPosts');

const createCategories = async (req, res) => {
  const newCategorie = await servicesPosts.createCategories(req.body);
  if (newCategorie.message) {
    return res.status(201).json({ message: newCategorie.message });
  }
  return res.status(201).json(newCategorie);
};

const allCategories = async (_req, res) => {
  const allcategories = await servicesPosts.allcategories();
  if (allcategories.message) {
    return res.status(400).json({ message: allcategories.message });
  }
  return res.status(200).json(allcategories);
};

module.exports = {
  createCategories,
  allCategories,
};
