const Joi = require('joi');
const UserServices = require('../services/userServices');

const validateCreateUserBody = async (req, res, next) => {
  const { error } = Joi.object({
    displayName: Joi.string().min(8),
    email: Joi.string().email().required(),
    password: Joi.string().length(6).required(),
    image: Joi.not().required(),
  }).validate(req.body);

  if (error) return next(error);
  
  next();
};

const validateRegistereduser = async (req, res, next) => {
  const { email } = req.body;

  const findUser = await UserServices.findUserByEmail(email);

  if (findUser) return res.status(409).json({ message: 'User already registered' });

  next();
};

module.exports = {
  validateCreateUserBody,
  validateRegistereduser,
};
