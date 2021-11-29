const jwt = require('jsonwebtoken');
require('dotenv').config();
const Categories = require('../Services/categoriesServices');

const topSecret = process.env.JWT_SECRET;

const isValidToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    } 
  try {
    const payload = jwt.verify(token, topSecret);
    req.user = payload;
    console.log(payload);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const isDataCorrect = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }
  next();
};

const idValidCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categories = await Categories.getCategory();

  // Tive ajuda do meu amigo Mauricio Leiri na lógica do map e do every
  const arrayOfCategories = categories.map((check) => check.id);
  const doesCategoryExist = categoryIds.every((element) => arrayOfCategories
    .includes(element));
  if (!doesCategoryExist) { 
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  isDataCorrect,
  isValidToken,
  idValidCategory,
};
