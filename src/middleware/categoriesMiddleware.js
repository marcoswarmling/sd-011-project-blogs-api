const Joi = require('joi');

const categoriesAuthentication = async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required().not().empty(),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = {
  categoriesAuthentication,
};
