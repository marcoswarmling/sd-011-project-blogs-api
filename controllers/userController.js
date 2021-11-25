const {
  userValidate,
  loginValidate,
  getUsers,
  getUserByID,
} = require('../services/userServices');

const userLogin = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userValidate(displayName, email, password, image);
    if (newUser.message) {
      return res.status(409).json(newUser);
    }
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: 'Something is wrong' });
  }
};

const userLoginValidate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await loginValidate(email, password);
    if (login.message) {
      return res.status(400).json(login);
    }
    return res.status(200).json(login);
  } catch (error) {
    console.log(error.message);
   res.status(500).json({ message: 'Invalid fields' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getUsers();
    if (users.message) {
      return res.status(401).json(users);
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserByID(id);
    if (user.message) {
      return res.status(404).json(user);
    }
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  userLogin,
  userLoginValidate,
  getAllUsers,
  getUser,
};