const loginServices = require('../services/loginServices');

const createLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await loginServices.createLogin(email, password);
   // console.log(token, 'Token - login');
    if (token.msgError) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Oh no! Server error!' });
  }
};

module.exports = {
  createLogin,
};
