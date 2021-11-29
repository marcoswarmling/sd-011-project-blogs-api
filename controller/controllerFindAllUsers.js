const serviceFindAllUsers = require('../service/serviceFindAllUsers');
const UniqueConstraintError = require('sequelize/lib/errors/validation/unique-constraint-error');

const controllerFindAllUsers = async (req, res) => {
  try {
    const user = await serviceFindAllUsers();
    res.status(200).json(user);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post user' });
  }
};

module.exports = controllerFindAllUsers;
