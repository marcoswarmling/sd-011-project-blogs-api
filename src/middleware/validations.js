const jwt = require('jsonwebtoken');
const Joi = require('joi');

const registerValidate = async (req, res, next) => {
  const schema = Joi.object({
    displayName: Joi.string().required().min(8),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required().length(6),
    image: Joi.allow(''),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

const loginValidate = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required().length(6),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports = {
  registerValidate,
  loginValidate,
  validateToken,
};