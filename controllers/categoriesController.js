const { Categories } = require('../models');

const createCategorie = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await Categories.create({ name });

    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao fazer o cadastro' });
  }
};

module.exports = {
  createCategorie,
};
