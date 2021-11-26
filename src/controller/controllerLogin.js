const ServiceLogin = require('../service/serviceLogin');

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const token = await ServiceLogin.login(email, password);

    if (token.message) {
      return res.status(400).json(token);
    }

    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'Invalid fields' });
  }
}

module.exports = { login };
