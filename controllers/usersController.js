const Users = require('../services/usersService');

const createUser = async (req, res) => {
  try {
    const { email, password, displayName, image } = req.body;
    const data = await Users.createUser({ email, password, displayName, image });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await Users.login({ email, password });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await Users.getAllUsers();
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Users.getUserById(id);
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
     return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later' });
  }
};

module.exports = { createUser, login, getAllUsers, getUserById };
