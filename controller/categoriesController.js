const service = require('../service/serviceCategories');

const create = async (req, res) => { 
  try {
    const { name } = req.body;
    const result = await service.create(name);

    return res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const result = await service.getAll();
  
    return res.status(200).json(result);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = { create, getAll };