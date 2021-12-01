const { loginValidator } = require('../notMiddleware/loginValid');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  
  const loginResult = await loginValidator(email, password);
  if (loginResult.status) { 
    return res.status(loginResult.status).json({ message: loginResult.message });
  }

  // if login is valid, "loginResult" receive user data, so we foward it:

  const userData = loginResult;

  req.user = userData;

  next();
};