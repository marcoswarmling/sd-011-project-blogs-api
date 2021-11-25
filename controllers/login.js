const loginServices = require('../services/login');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const loginToken = await loginServices.login(email, password);

  if (!loginToken) {
    return next({ 
      code: 'invalidLogin',
      message: 'Invalid fields',
    });
  }

  res.status(200).json({ token: loginToken });
};

module.exports = {
  login,
};
