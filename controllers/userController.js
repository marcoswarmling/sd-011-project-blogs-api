const userSevice = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message, token } = await userSevice
    .createUser(displayName, email, password, image);

  if (status) return res.status(status).json({ message });

  return res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { token, status, message } = await userSevice.login(email, password);

  if (status) return res.status(status).json({ message });

  return res.status(200).json({ token });
};

module.exports = {
  createUser,
  login,
};
