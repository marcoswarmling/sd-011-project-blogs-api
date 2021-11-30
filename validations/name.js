const Joi = require('joi');

const { Category } = require('../models');
const err = require('../helpers/errors');

const joiNameSchema = Joi.object({
  name: Joi.string()
    .min(4)
    .required(),
});

const validName = (req) => {
  const { name } = req.body;

  const validationResult = joiNameSchema.validate({ name });

  if (validationResult.error) {
    const { message } = validationResult.error.details[0];

    return { message };
  }
};

const categoryAlreadyExists = async (req, res, next) => {
  const { name } = req.body;

  const query = await Category.findOne({ where: { name } });

  if (query !== null) return res.status(409).json(err.categoryAlreadyExists);

  next();
};

module.exports = { 
  validName,
  categoryAlreadyExists,
};