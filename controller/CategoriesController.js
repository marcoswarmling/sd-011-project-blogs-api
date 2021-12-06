const { create } = require('../services/CategoryService');

const SERVER_ERROR = 'server error';

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const response = await create(name);
    if (response.message) return res.status(response.status).json({ message: response.message });
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: SERVER_ERROR });
  }
};

module.exports = {
  createCategory,
};