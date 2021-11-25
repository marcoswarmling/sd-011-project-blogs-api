const service = require('../service/userService');

const createUser = async (req, res) => {
  try {
    const { email, displayName, password, image } = req.body;

    const newUser = await service.createUser(
      email,
      displayName,
      password,
      image,
    );

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const getUsers = await service.getAllUsers();

    return res.status(200).json(getUsers);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const getUsers = await service.getUserById(id);

    if (!getUsers) { return res.status(404).json({ message: 'User does not exist' }); }

    return res.status(200).json(getUsers);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
