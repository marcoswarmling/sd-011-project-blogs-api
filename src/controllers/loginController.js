const { generatedToken } = require('../service/loginService');

const loginUser = async (req, res) => {
  const login = await generatedToken(req.body);
  if (login.message) {
    return res.status(400).json(login);
  }
  res.status(200).json({ token: login });
};

module.exports = { loginUser };
