const Joi = require('joi');
const { User } = require('../../models');

const loginAuthentication = async (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    password: Joi.string().required().length(6),
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const userExistsInDb = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  next();
};

module.exports = {
  loginAuthentication,
  userExistsInDb,
};
