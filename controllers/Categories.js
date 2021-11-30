const Categories = require('../services/Categories');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    
    const { category, code, message } = await Categories.create({ name });
  
    if (!category) return res.status(code).json({ message });

    res.status(code).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
};