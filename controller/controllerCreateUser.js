const UniqueConstraintError = require('sequelize/lib/errors/validation/unique-constraint-error');
const serviceCreateUser = require('../service/serviceCreateUser');

const controllerCreateUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = { displayName, email, password, image };
  try {
    const user = await serviceCreateUser(newUser);
    console.log("TESTANDO A", res);
    return res.status(201).json({ token: user });
  } catch (error) {
    console.log("TESTANDO B - OPA OPA OPA DEU RUIM", error);
    console.log("TESTANDO C - OPA OPA OPA DEU RUIM", res);
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
