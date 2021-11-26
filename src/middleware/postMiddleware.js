const Joi = require('joi');

const { Categorie } = require('../../models');

const categoryExists = async (req, res, next) => {
  const { categoryIds } = req.body;

  const categorie = await Categorie.findAll();

  const categoryId = categorie.map((each) => each.dataValues.id);

  const result = categoryId.find((each, index) => each === categoryIds[index]);

  if (!result) return res.status(400).json({ message: '"categoryIds" not found' });

  next();
};

const loginAuthentication = async (req, res, next) => {
  const { error } = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.required(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = {
  loginAuthentication,
  categoryExists,
};
