const categoryServices = require('../services/categoryServices');

const registerCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const registeredCat = await categoryServices.registerCategory(name);
    return res.status(201).json(registeredCat); 
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Server Unavailable' });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await categoryServices.getAll();
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: e.message });
  }
};

module.exports = {
  registerCategory,
  getAll,
};
