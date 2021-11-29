const Joi = require('joi');
const { Category } = require('../models');

const newCatValidt = Joi.object({
  name: Joi.string().required(),
});

const createCat = async (name) => {
  const catIsValid = newCatValidt.validate({ name });
  if (catIsValid.error) {
    return ({ err: {
        status: 400,
        message: catIsValid.error.details[0].message,
      },
    });
  }
  const newCat = await Category.create({ name });
  return newCat.dataValues;
};

const getAllCats = async () => {
  const cats = await Category.findAll();

  return cats;
};

module.exports = {
  createCat,
  getAllCats,
};
