const service = require('../service/userService');

const create = async (req, res) => { 
  try {
    const { displayName, email, password, image } = req.body;
    const result = await service.create(displayName, email, password, image);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
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

const getAllId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await service.getAllId(id);

    if (!result) return res.status(404).json({ message: 'User does not exist' });
  
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { create, getAll, getAllId };