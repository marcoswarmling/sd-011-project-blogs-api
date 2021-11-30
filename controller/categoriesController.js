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

module.exports = { create };