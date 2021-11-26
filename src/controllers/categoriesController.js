const categoriesService = require('../service/categoriesService');

const createCategorie = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const categorie = await categoriesService.createNewCategorie({ name });
    return res.status(categorie.statusCode).json(categorie.response);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createCategorie,
};