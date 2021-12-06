const serviceLogin = require('../services/loginServices');

const loginCreate = async (req, res) => {
  const user = req.body;
  const jwt = await serviceLogin.userLogin(user);
  res.status(200).json({ jwt });
};

module.exports = { loginCreate };