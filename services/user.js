const Joi = require('joi');
const { User } = require('../models');

const newUserValidt = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().required(),
});

const doesUserExist = async (email) => {
  const existingUser = await User.findOne({ where: { email } });
  return existingUser;
};

const createUser = async (displayName, email, password, image) => {
  const userIsValid = newUserValidt.validate({ displayName, email, password, image });
  if (userIsValid.error) {
    return ({ err: {
        status: 400,
        message: userIsValid.error.details[0].message,
      },
    });
  }
  const existingUser = await doesUserExist(email);
  if (existingUser) {
    return ({ err: {
        status: 409,
        message: 'User already registered',
      },
    });
  }
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  createUser,
};
