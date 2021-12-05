/* const jwt = require('jsonwebtoken'); */
const { validateToken } = require('../helpers/jwt');
const { createUser } = require('../schema');
const { User } = require('../models');

/* const { JWT_SECRET } = process.env; */

const valUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  
  const { error } = createUser.validate({
    displayName,
    email,
    password,
  });
  
  /* console.log('ESSE É O MEU ERROR', error); */

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const valToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const data = validateToken(token);

    req.user = data;
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = { valUser, valToken };