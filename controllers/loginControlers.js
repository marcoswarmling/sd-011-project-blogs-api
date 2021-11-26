const Login = require('../Services/loginServices');

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const token = await Login.login(email);
    // console.log(token);
    if (token.errorCode || token.errorCode === 'USER_NOT_EXISTS') {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

module.exports = {
  login,
};
