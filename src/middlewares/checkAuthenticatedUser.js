const { validateToken } = require('../auth/validateToken');

const checkAuthenticatedUser = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) return res.status(401).json({ message: 'Token not found' });
  
    const valideToken = await validateToken(token);

    if (!valideToken) return res.status(401).json({ message: 'Expired or invalid token' });
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { checkAuthenticatedUser };