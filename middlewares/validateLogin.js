const Joi = require('joi');
const { Users } = require('../models');

const schemaLogin = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validateLoginJoi = async (req, res, next) => {
  const validate = schemaLogin.validate(req.body);
  if (validate.error) {
    return res.status(400).json({
      message: validate.error.details[0].message,
    });
  }
  next();
};

const error = 'Invalid fields';

const validateLoginData = async (req, res, next) => {
  const { password, email } = req.body;
  const validate = await Users.findOne({ where: { email } });
  if (!validate || validate.email !== email || validate.password !== password) {
    return res.status(400).json({ message: error });
  }
  if (password !== validate.password) {
    return res.status(400).json({ message: error });
  }

  next();
};

module.exports = {
  validateLoginData,
  validateLoginJoi,
}; 