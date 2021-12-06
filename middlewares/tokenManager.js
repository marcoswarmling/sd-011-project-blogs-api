const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = async (req, res) => {
  try {
    const { user } = req;
    const token = jwt.sign(user.dataValues, SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ message: 'Erro na função generateToken' });
};

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, SECRET, jwtConfig);
    req.user = decoded;
    if (!decoded) return res.status(401).json({ message: 'Expired or invalid token' });
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = {
  generateToken,
  validateToken,
};