const joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/categoryService');

const categoryRegister = rescue(async (req, res, next) => {
  const { error } = joi.object({
    name: joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  const { name } = req.body;
  const { email } = req.user;

  const result = await service.categoryRegister(name, email);
  // console.log(result);
  if (result.error) return next(result.error);
  return res.status(201).json(result);
});

module.exports = {
  categoryRegister,
};
