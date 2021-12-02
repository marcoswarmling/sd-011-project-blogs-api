const Joi = require('joi');

module.exports = (req, res, next) => {
  if (req.body.categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }

  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    content: Joi.string().not().empty().required(),
  }).validate(req.body);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};