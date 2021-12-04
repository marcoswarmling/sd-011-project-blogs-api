const { Categories } = require('../models');

function checkTitle(req, res, next) {
  const { title } = req.body;

  if (!title || title === 'undefined') {
    return res.status(400).json({
      message: '"title" is required',
    });
  }

  next();
}

function checkContent(req, res, next) {
  const { content } = req.body;

  if (!content || content === 'undefined') {
    return res.status(400).json({
      message: '"content" is required',
    });
  }

  next();
}

function checkCategoryIds(req, res, next) {
  const { categoryIds } = req.body;

  if (!categoryIds || categoryIds === 'undefined') {
    return res.status(400).json({
      message: '"categoryIds" is required',
    });
  }

  next();
}

async function chekCategorisExist(req, res, next) {
  const { categoryIds } = req.body;

  const result = await Categories.findAll({
    where: {
      id: categoryIds,
    },
  });

  const convertNumber = Object.values(result).map(({ id }) => id);
  const check = result.every((num) => convertNumber.includes(num));

  if (check) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
}

function checkUserAutorizationPutPostId(req, res, next) {
  const { id } = req.userInfo;

  if (id !== Number(req.params.id)) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
}

function notPutcategories(req, res, next) {
  const { categoryIds } = req.body;
  if (categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }
  next();
}

module.exports = {
  checkContent,
  checkCategoryIds,
  checkTitle,
  chekCategorisExist,
  checkUserAutorizationPutPostId,
  notPutcategories,
};
