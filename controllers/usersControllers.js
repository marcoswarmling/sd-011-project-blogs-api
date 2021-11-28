const userServices = require('../services/userServices');

const getByIdUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userServices.getByIdUser(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const token = await userServices.createUser(displayName, email, password, image);

    if (token.error && token.error === 'Email_Exists') {
      return res.status(409).json({ message: 'User already registered' });
    }
    return res.status(201).json(token);
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

// const updateUser =  async (req, res) => {
//   const { id } = req.params;
//   const {  } = req.body;

//   res.status(200).json({});
// };

// const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({});
// };

module.exports = { createUser, getAllUsers, getByIdUser };