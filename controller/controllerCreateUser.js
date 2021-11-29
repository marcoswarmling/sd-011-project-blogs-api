const UniqueConstraintError = require('sequelize/lib/errors/validation/unique-constraint-error');
const serviceCreateUser = require('../service/serviceCreateUser');

const controllerCreateUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = { displayName, email, password, image };
  try {
    const user = await serviceCreateUser(newUser);
    res.status(201).json({ token: user });
    return;
  } catch (error) {
    if (
      error instanceof UniqueConstraintError
      && error.errors[0].path === 'Users.email'
    ) {
      res.status(409).json({ message: 'User already registered' });
      return;
    }
    console.log(error);
    res.status(500).json({ message: 'problema aqui: rota post user' });
  }
};
module.exports = controllerCreateUser;
