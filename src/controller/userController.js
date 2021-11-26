const UserService = require('../services/userService');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { code, result } = await UserService.createUser(displayName, email, password, image);
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal Error Server' });
  }
};

const connectUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { code, result } = await UserService.connectUser(email, password);
    res.status(code).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal Error Server' });
  }
};

module.exports = {
  createUser,
  connectUser,
};