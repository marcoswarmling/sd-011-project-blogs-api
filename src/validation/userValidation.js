const Joi = require('joi');
const { User } = require('../../models');

const schema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required(),
  password: Joi.string().length(6).required(),
  image: Joi.allow(''),
});

const validReqUsers = (req, res, next) => {
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

const validEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(409).json({ message: 'User already registered' });
    }
    next();
  } catch (error) {
     return res.status(500).json({ message: error });
  }
};

module.exports = { 
  validEmail,
  validReqUsers,
};
