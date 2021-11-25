const userService = require('../service/userService');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userService.createNewUser({ displayName, email, password, image });
    return res.status(user.statusCode).json(user.response);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const user = await userService.getAllUsers();
    return res.status(user.statusCode).json(user.response);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (user.erroCode) return res.status(user.statusCode).json(user.erroCode);
    return res.status(user.statusCode).json(user.response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar o usuário' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};