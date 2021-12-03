const userServices = require('../services/userServices');
const { SERVER_ERROR } = require('../utils/statusMessage');

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { displayName, email, password, image } = req.body;
    const response = await userServices.registerUser(displayName, email, password, image);
    return res.status(response.status).json(response.message);
  } catch (e) {
    console.log(e);
    return res.status(SERVER_ERROR).json({ message: `Erro de servidor ${e.message}` });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await userServices.getAllUsers();
    return res.status(response.status).json(response.message);
  } catch (e) {
    console.log(e);
    return res.status(SERVER_ERROR).json({ message: `Erro de servidor ${e.message}` });
  }
};

/* const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await userServices.getOneUser(id);
    return res.status(response.status).json(response.message);
  } catch (e) {
    console.log(e);
    return res.status(SERVER_ERROR).json({ message: `Erro de servidor ${e.message}` });
  }
};

*/

module.exports = {
  createUser,
  getAllUsers,
};
