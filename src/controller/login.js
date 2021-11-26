const loginService = require('../service/login');

const getLogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await loginService.getLogIn(email, password);
    if (response.err) {
      const { err, message } = response;
      return res.status(err.status).json({ message });
    }

    return res.status(200).json({ token: response });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getLogIn,
};
