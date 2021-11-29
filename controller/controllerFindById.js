const serviceFindById = require('../service/serviceFindById');

const controllerFindById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await serviceFindById(id);
    if (user) {
      res.status(200).json(user);
      return;
    }
    if (!user) {
      res.status(404).json({ message: 'User does not exist' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ menssage: 'problema aqui: rota post user' });
  }
};

module.exports = controllerFindById;
