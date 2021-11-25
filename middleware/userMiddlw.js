const Joi = require('joi');
const jwt = require('jsonwebtoken');

const schema = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().length(6).required(),
  image: Joi.allow(''),
});

const validReqUsers = (req, res, next) => {
  try {
    const user = req.body;
    const { error } = schema.validate(user);

    if (error) {
      return res.status(400).json({ message: error.message });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

const loginValid = async (req, res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().required().length(6),
  });

  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const jwtValid = async (req, res, next) => {
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
  validReqUsers,
  loginValid,
  jwtValid,
};