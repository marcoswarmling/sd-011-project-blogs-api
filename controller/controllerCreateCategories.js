const serviceCreateCategories = require('../service/serviceCreateCategories');

const controllerCreateCategories = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await serviceCreateCategories(name);
    return res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'problema aqui: rota post categories' });
  }
};
module.exports = controllerCreateCategories;
