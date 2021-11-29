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

module.exports = {
  checkContent,
  checkCategoryIds,
  checkTitle,
};
