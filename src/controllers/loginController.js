const loginService = require('../service/loginService');

const createLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await loginService.login({ email, password });

    return res.status(user.statusCode).json(user.response);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createLogin,
};