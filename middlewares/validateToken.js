const { validateToken } = require('../utils/token');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
    validateToken(authorization);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
