const serviceGetAllCategories = require('../service/serviceGetAllCategories');

const controllerGetAllCategories = async (req, res) => {
  try {
    const categories = await serviceGetAllCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post categories' });
  }
};

module.exports = controllerGetAllCategories;
