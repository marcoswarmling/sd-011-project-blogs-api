const {
  loginUser,
} = require('../services/login');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userToken = await loginUser(email, password);
    if (userToken) {
      return res.status(200).json({ token: userToken });
    }

    return res.status(400).json({ message: 'Invalid fields' });
  } catch (_err) {
    return res.status(500).json({ message: 'error' });
  }
};

module.exports = {
  login,
};
