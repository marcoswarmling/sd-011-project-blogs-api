const Joi = require('joi');

const schemaPost = Joi.object().keys({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const postValidate = async (req, res, next) => {
  const validate = schemaPost.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    }); 
  }
  return next();
};

module.exports = { postValidate }; 