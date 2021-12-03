const service = require('../service/blogPostsService');

const create = async (req, res) => { 
  try {
    const { title, content } = req.body;
    const { userId } = req;
    
    const result = await service.create(title, content, userId);

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
    return res.status(400).json({ message: error.message });
  }
};

const getId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await service.getId(Number(id));

    if (result.message) return res.status(404).json(result);
  
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { create, getAll, getId };