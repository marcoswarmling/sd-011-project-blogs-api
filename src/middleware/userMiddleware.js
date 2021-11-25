const Joi = require('joi');

const jwt = require('jsonwebtoken');
const { User } = require('../../models');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const schema = Joi.object({
  displayName: Joi.string().required().min(8),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().required().length(6),
  image: Joi.allow(''),
});

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

const userAuthentication = async (req, res, next) => {
  const user = req.body;

  const { error } = schema.validate(user);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

const jwtAuthorization = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  jwt.verify(token, secret, (err, authorizedData) => {
    if (err) {
        res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.userId = authorizedData.id;
    next();
  });
};

module.exports = {
  emailExists,
  userAuthentication,
  jwtAuthorization,
};
