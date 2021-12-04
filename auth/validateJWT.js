// validateJWT.js
const jwt = require('jsonwebtoken');
// const model = require('../models/users');

const segredo = 'seusecretdetoken';

const validateJWT = async (req, res, next) => {  
  const token = req.headers.authorization;
  
  if (!token) {    
    return res.status(401).json({ message: 'missing auth token' });
  }  
  try {    
    const decoded = jwt.verify(token, segredo);

    req.user = decoded.data;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  validateJWT,
};