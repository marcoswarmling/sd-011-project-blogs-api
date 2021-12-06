const { User } = require('../models');
const { createJWT } = require('../middlewares/createJWT');
const userService = require('../services/userService');

const getAllUsers = async (_req, res) => {
  try {
    const users = await User.findAll();

    if (!users) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const { error } = await userService.resultData(displayName, email, password);
    if (error) return res.status(error.code).json({ message: error.message });

    const user = await userService.createUser(displayName, email, password, image);
    if (user.error) return res.status(user.error.code).json({ message: user.error.message });

    const token = createJWT(user);

    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

// const removeUser = async (req, res) => {

// };

module.exports = {
  getUser,
  getAllUsers,
  addUser,
  // removeUser,
};
