const Joi = require('joi');
const { user } = require('../../models');

const newUser = (name, email, password) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate({ name, email, password });
  
  if (error) throw error;
};

const alreadyExist = (email) => {
  const exists = user.findOne({ where: { email } });
  if (exists) {
    const error = new Error('User already registered');
    error.code = 409;
    throw error;
  }
  return null;
};

module.exports = {
    newUser,
    alreadyExist,
};
