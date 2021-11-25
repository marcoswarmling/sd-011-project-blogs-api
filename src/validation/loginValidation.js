const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required(),
  password: Joi.string().length(6).required(),
});

const validLogin = (req, res, next) => {
  try {
    const user = req.body;
    const { error } = schema.validate(user);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = validLogin;