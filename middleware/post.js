const Joi = require('joi');
// const { Post } = require('../models');

const checkPost = async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    categoryIds: Joi.string().required(),
    content: Joi.required(),
  }).validate(req.body);

  if (error) res.status(400).json({ message: error.message });

  next();
};

module.exports = { checkPost };