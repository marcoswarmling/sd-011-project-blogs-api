const { validateCategory } = require('../validations/categories');

const categoryFields = (req, res, next) => {
  const { name } = req.body;
  const isInvalidCategory = validateCategory(name);
  
  if (isInvalidCategory) {
    return res.status(isInvalidCategory.err.code).json({ message: isInvalidCategory.err.message });
  }

  next();
};

module.exports = {
  categoryFields,
};