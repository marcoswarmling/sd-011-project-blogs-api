const jwt = require('jsonwebtoken');

const { getUserByEmail } = require('../services/userServices');
const { UNAUTHORIZED } = require('../utils/statusError');
const { TOKEN_NOT_FOUND, INVALID_TOKEN } = require('../utils/errorMessages');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  
  try {
    if (!token) {
      return res.status(UNAUTHORIZED).json(TOKEN_NOT_FOUND);
    }
    const decoded = jwt.verify(token, secret);
   
    const userEmail = await getUserByEmail(decoded.data.email);
    if (!userEmail) {
      return res.status(UNAUTHORIZED).json(INVALID_TOKEN);
    }
  } catch (err) {
    return res.status(UNAUTHORIZED).json(INVALID_TOKEN);
  }
  next();
};

module.exports = { auth };