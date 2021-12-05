const jwt = require('jsonwebtoken');
const { createUser } = require('../schema');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

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

    // Dário Junior me ajudou no jwt.verify 
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ message: 'Expired or invalid token' });
    }
    const { user: { id } } = decoded;
    req.userId = id; 
  });

  next();
};

module.exports = { valUser, valToken };