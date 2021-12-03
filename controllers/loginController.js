const loginServices = require('../services/loginServices');
const { SERVER_ERROR } = require('../utils/statusMessage');

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await loginServices.signIn(email, password);
    return res.status(response.status).json(response.message);
  } catch (e) {
    console.log(e);
    return res.status(SERVER_ERROR).json({ message: `Erro de servidor ${e.message}` });
  }
};

module.exports = {
  signIn,
};