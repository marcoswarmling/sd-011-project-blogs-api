const loginService = require('../services/loginServices');

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await loginService.createLogin({ email, password });
    return res.status(200).json(login);
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

module.exports = { createLogin };
