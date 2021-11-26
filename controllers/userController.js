const userServices = require('../services/userServices');

const signUpUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userServices.registerUser(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(409).json({ message: e.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userServices.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userServices.getOneUser(id);
    return res.status(200).json(user);
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};

module.exports = {
  signUpUser,
  getAllUsers,
  getOneUser,
};
