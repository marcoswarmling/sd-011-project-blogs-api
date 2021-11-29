const jwt = require('jsonwebtoken');
const { getByEmail } = require('../services/userService');
require('dotenv').config();

const segredo = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decoded = jwt.verify(token, segredo);
    
    const user = await getByEmail(decoded.dataToken.email);
   
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Expired or invalid token' });
    }
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = { auth };