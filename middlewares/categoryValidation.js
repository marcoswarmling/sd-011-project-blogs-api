const CATEGORY_NAME_ERROR = {
  message: '"name" is required',
};

const categoryNameValidator = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json(CATEGORY_NAME_ERROR);
  }

  next();
};

module.exports = {
  categoryNameValidator,
};