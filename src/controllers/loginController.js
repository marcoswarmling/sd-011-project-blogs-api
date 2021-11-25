const { loginUserVerify } = require('../service/loginService');

const loginUser = async (req, res) => {
  const login = await loginUserVerify(req.body);
  res.status(200).json(login);
};

module.exports = { loginUser };
