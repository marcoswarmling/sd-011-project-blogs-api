const TITLE_REQUIRED_ERROR = {
  message: '"title" is required',
};

const CONTENT_REQUIRED_ERROR = {
  message: '"content" is required',
};

const CATEGORY_REQUIRED_ERROR = {
  message: '"categoryIds" is required',
};

const titleValidator = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res
      .status(400)
      .json(TITLE_REQUIRED_ERROR);
  }

  next();
};

const contentValidator = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res
      .status(400)
      .json(CONTENT_REQUIRED_ERROR);
  }

  next();
};

const categoryIdsValidator = (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res
      .status(400)
      .json(CATEGORY_REQUIRED_ERROR);
  }

  next();
};

module.exports = {
  titleValidator,
  contentValidator,
  categoryIdsValidator,
};