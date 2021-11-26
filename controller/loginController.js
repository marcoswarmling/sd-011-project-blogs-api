const loginServices = require('../services/loginServices');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginServices.getUserByEmail(email, password);
    console.log(token);
    if (token.message) {
      return res.status(400).json(token);
    }
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'error interno' });
  }
};

module.exports = {
  userLogin,
};