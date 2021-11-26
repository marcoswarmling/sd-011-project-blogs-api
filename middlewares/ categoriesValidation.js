const Joi = require('joi');

const schemaCategoryPost = Joi.object().keys({
  name: Joi.string().required(),
});

const CategoryPostValidate = async (req, res, next) => {
  const validate = schemaCategoryPost.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    }); 
  }
  return next();
};

module.exports = { CategoryPostValidate }; 