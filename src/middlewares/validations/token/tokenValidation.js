const errors = require('../../../schemas/errorMessage');
const JWT = require('../../../helppers/jwt');
const { getByEmail } = require('../../../services/userService');

module.exports = async (req, res, next) => {
  const jwt = req.headers.authorization;
  
  if (!jwt) {
    const { statusCode, message } = errors.token.notExistent;

    return res.status(statusCode).json({ message });
  }

  try {
    const { email } = JWT.validateToken(jwt);
    const user = await getByEmail(email);
    
    if (user) {
      return next();
    }
  } catch (error) {
    const { statusCode, message } = errors.token.expired;
    
    return res.status(statusCode).json({ message });
  } 
};
