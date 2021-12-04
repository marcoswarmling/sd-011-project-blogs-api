const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string().min(8)
.required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).messages({
    'string.min': '"password" length must be 6 characters long',
  })  
.required(),
  image: Joi.string(),
});

const validateUserRegistration = (req, res, next) => {
  const { displayName, email, password, image } = req.body;    
  const { error } = schema.validate({ displayName, email, password, image });  

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }  

  next();
};

module.exports = validateUserRegistration;