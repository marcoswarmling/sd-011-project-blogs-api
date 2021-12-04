const { getCategoriesServ } = require('../services/categories');

async function validateTitle(req, res, next) {
  const { title } = req.body;
  if (!title) {
  return res.status(400).json({ message: '"title" is required' });
  }
  next();
  }
  
  async function validateContent(req, res, next) {
  const { content } = req.body;
  if (!content) {
  return res.status(400)
  .json({ message: '"content" is required' });
  }
  next();
  }

async function validateCategId(req, res, next) {
const { categoryIds } = req.body;
if (!categoryIds) {
  return res.status(400)
    .json({ message: '"categoryIds" is required' });
} // esse if verifica se o categoryIds está preenchido.

const categoriesData = await getCategoriesServ();
const ids = categoriesData.map((category) => category.dataValues.id);
const checkIfIncludes = ids.includes(Number(categoryIds));
if (!checkIfIncludes) {
  return res.status(400)
    .json({ message: '"categoryIds" not found' });
} // verifica se o categoryId a ser postado existe na lista de categorias já cadastradas. Se falso exibe mensagem 'not found'.
next();
}

module.exports = {
  validateTitle,
  validateContent,
  validateCategId,
};