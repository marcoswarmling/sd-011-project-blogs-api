const LoginService = require('../services/loginService');

const create = async (req, res) => {
  try {
    const { email, password } = req.body; 
    const newLogin = await LoginService.create({ email, password });
    return res.status(200).json(newLogin);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  create,
}; 