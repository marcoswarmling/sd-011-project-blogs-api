const serviceLogin = require('../services/loginServices');

const loginCreate = async (req, res) => {
  const { email } = req.body;
  const jwt = await serviceLogin.userLogin(email);
  res.status(200).json({ jwt });
};

module.exports = { loginCreate };