const serviceLogin = require('../service/serviceLogin');

const controllerLoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await serviceLogin(email, password);
    if (login) {
      res.status(200).json({ token: login });
      return;
    }
    if (!login) {
      res.status(400).json({ message: 'Invalid fields' });
      return;
    }
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      if (error.errors[0].path === 'Users.email') {
        res.status(409).json({ menssage: 'User already registered' });
        return;
      }
    }
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post user' });
  }
};

module.exports = controllerLoginUser;
