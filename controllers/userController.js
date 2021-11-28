const userSevice = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, message, token } = await userSevice
    .createUser(displayName, email, password, image);

  if (status) return res.status(status).json({ message });

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};
