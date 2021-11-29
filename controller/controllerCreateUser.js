const serviceCreateUser = require('../service/serviceCreateUser');
const UniqueConstraintError = require('sequelize/lib/errors/validation/unique-constraint-error');

const controllerCreateUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = {
    displayName: displayName,
    email: email,
    password: password,
    image: image,
  };
  try {
    const user = await serviceCreateUser(newUser);
    res.status(201).json({ token: user });
    return;
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

module.exports = controllerCreateUser;
