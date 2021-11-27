const Joi = require('joi');

const schemaCategory = Joi.object({
  name: Joi.string().required(),
});

const verifyFields = async (req, res, next) => {
  const { error } = schemaCategory.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  return next();
};

module.exports = {
  verifyFields,
};