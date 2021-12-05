const { create, getAllUsers } = require('../services/UserService');
const { signIn } = require('../services/Login');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const response = await create(displayName, email, password, image);
    if (response.message) return res.status(response.status).json({ message: response.message });
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await signIn(email, password);
    if (response.message) return res.status(response.status).json({ message: response.message });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    req.status(500).json({ message: 'server error' });
  }
};

const getUser = async (_req, res) => {
  try {
    const response = await getAllUsers();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'server error' });
  }
};

module.exports = {
  createUser,
  login,
  getUser,
};
