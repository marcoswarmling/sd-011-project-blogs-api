require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
// const model = require('../models/users');

const validateJWT = async (req, res, next) => {  
  try {    
  const token = req.headers.authorization;
  
  if (!token) {    
    return res.status(401).json({ message: 'Token not found' });
  }  
  const { data } = jwt.verify(token, JWT_SECRET); 
  // Ver com o Lima ou os meninos
  req.token = data.email;

  next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateJWT,
};