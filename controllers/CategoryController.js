const CategoryService = require('../services/CategoryService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const register = await CategoryService.createCategory(name);

    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    if (token.length < 15) return res.status(401).json({ message: 'Expired or invalid token' });

    return res.status(201).json(register);
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  create,
};