const serviceFindAllUsers = require('../service/serviceFindAllUsers');

const controllerFindAllUsers = async (req, res) => {
  try {
    const user = await serviceFindAllUsers();
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post user' });
  }
};

module.exports = controllerFindAllUsers;
