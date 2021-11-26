const Joi = require('joi');
const { User } = require('../models');
const ErrorList = require('../utils/errorList');

const newUserValidt = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string().required(),
});

const LoginValidt = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
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
    return ErrorList.userAlreadyExists;
  }
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const userLogin = async (email, password) => {
  const loginIsValid = LoginValidt.validate({ email, password });
  if (loginIsValid.error) {
    return ({ err: {
        status: 400,
        message: loginIsValid.error.details[0].message,
      },
    });
  }
  const existingUser = await doesUserExist(email);
  if (existingUser) {
    return existingUser;
  }
  return ErrorList.invalidLogin;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

module.exports = {
  createUser,
  userLogin,
  getAllUsers,
};
