const Joi = require('joi');

const schema = Joi.object({  
  email: Joi.string().email().required().not()
.empty()
.required(),
  password: Joi.string().messages({
    'string.min': '"password" length must be 6 characters long',
  })  
.not()
.empty()
.required(),
  image: Joi.string(),
});

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;    
  const { error } = schema.validate({ email, password });  

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }  

  next();
};

module.exports = validateLogin;