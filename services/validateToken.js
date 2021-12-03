const jwt = require('jsonwebtoken');

const tokenValidate = async (req, res, next) => {
  try {
    const token = req.header('authorization');
    if (!token) return res.status(401).json({ message: 'Token not found' });
        
    jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidate,
};
