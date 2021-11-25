const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required(),
});

const validCategories = (req, res, next) => {
  try {
    const categories = req.body;
    const { error } = schema.validate(categories);

    if (error) {
      return res.status(400).json({ message: error.message });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  validCategories,
};