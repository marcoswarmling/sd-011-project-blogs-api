const JWT = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const validateJWTToken = async (req, res, next) => {
  // console.log('ENTROU NO TOKEN');
  const token = req.headers.authorization;
    // console.log(token);
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
// console.log(SECRET);
  try {
    const payload = JWT.verify(token, SECRET);  
    req.user = payload;
    // console.log(payload, 'PAYLOAD');
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' }); 
  }  
};

module.exports = {
  validateJWTToken,
};
