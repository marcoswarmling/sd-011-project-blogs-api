const Joi = require('joi');
// const servicesUser = require('../services/servicesUser');

const schemaCategories = Joi.object({
  name: Joi.string().required(),
});

const verifyFields = async (req, res, next) => {
  const { error } = schemaCategories.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  return next();
};

module.exports = {
  verifyFields,
};
