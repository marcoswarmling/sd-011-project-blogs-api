const Categories = require('../Services/categoriesServices');

const addCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const categories = await Categories.createCategories(name);
    if (categories.errorCode && categories.errorCode === 'CATEGORY_ALREADY_EXISTS') {
      return res.status(409).json({
        message: 'Already registered',
      });
    }
    return res.status(201).json(categories);
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

const verifyCategory = async (req, res) => {
  try {
    const category = await Categories.findAll();
        if (category.errorCode && category.errorCode === 'CATEGORY_ALREADY_EXISTS') {
      return res.status(409).json({
        message: 'Already registered',
      });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.getCategory();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

module.exports = {
  addCategories,
  getCategories,
  verifyCategory,
};
