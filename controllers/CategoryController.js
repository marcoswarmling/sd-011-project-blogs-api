const jwt = require('jsonwebtoken');
const { Category } = require('../models');

const secret = '123456';

const jwtConfig = {
  algorithm: 'HS256',
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({ name });
    jwt.sign({ data: newCategory }, secret, jwtConfig);

    return res.status(201).json(newCategory);
  } catch (e) {
    console.log(e);
    return res.status(409).json({ message: 'User already registered' });
  }
};

module.exports = {
  createCategory,
};
