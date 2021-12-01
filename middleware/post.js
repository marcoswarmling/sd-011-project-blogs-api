const Joi = require('joi');
// const { Post } = require('../models');

const checkPost = async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.required(),
  }).validate(req.body);

  if (error) res.status(400).json({ message: error.message });

  console.log('veio aqui', error);

  next();
};

module.exports = { checkPost };