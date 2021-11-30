const { registerUser } = require('../services/register');

const register = async (req, res) => {
  const userData = req.body;
  try {
    const userToken = await registerUser(userData);

    return res.status(201).json({ token: userToken });
  } catch (_err) {
    return res.status(500).json({ message: 'error' });
  }
};

module.exports = {
  register,
};
