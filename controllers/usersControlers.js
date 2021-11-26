const Users = require('../Services/usersServices');

const addUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await Users.createUser(displayName, email, password, image);
    if (token.errorCode && token.errorCode === 'USER_ALREADY_EXISTS') {
      return res.status(409).json({
        message: 'User already registered',
      });
    }
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Users.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.getById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `Erro: ${error}` });
  }
};

module.exports = {
  addUser,
  getUsers,
  getById,
};
