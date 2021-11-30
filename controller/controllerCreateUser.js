const UniqueConstraintError = require('sequelize/lib/errors/validation/unique-constraint-error');
const serviceCreateUser = require('../service/serviceCreateUser');

const controllerCreateUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = { displayName, email, password, image };
  try {
    const user = await serviceCreateUser(newUser);
    return res.status(201).json({ token: user });
  } catch (error) {
    if (
      error instanceof UniqueConstraintError
      && error.errors[0].path === 'Users.email'
    ) {
      return res.status(409).json({ message: 'User already registered' });
    }
    console.log(error);
    res.status(500).json({ message: 'problema aqui: rota post user' });
  }
};
module.exports = controllerCreateUser;
