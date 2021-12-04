const { nameRequired } = require('../errorText');

const categoriesValidation = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json(nameRequired);

    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  categoriesValidation,
};
