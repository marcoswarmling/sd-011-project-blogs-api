const ServiceCategory = require('../service/serviceCategory');

async function create(req, res) {
  try {
    const { name } = req.body;
    const newCategorie = await ServiceCategory.create(name);
    console.log(newCategorie);
    if (newCategorie.message) {
      return res.status(400).json(newCategorie);
    }
    return res.status(201).json(newCategorie);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

async function getAll(req, res) {
  try {
    const getAllCategories = await ServiceCategory.getAll();

    if (!getAllCategories) {
      return res.status(400).json({ message: 'Categories not found' });
    }

    return res.status(200).json(getAllCategories);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Categories not found' });
  }
}

module.exports = { create, getAll };
