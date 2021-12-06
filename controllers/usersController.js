const userService = require('../services/userService');

const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const insertData = await userService.createUser(userData);
    if (insertData.err) return res.status(insertData.err.code).json(insertData.err);
    return res.status(201).json(insertData);
  } catch (error) {
    res.status(500).json({ err: { code: 500, message: 'Internal server error' } });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginData = await userService.login({ email, password });
    if (loginData.err) {
      return res.status(loginData.err.code).json(loginData.err.message); 
    }
     return res.status(200).json(loginData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    if (users.err) return res.status(users.err.code).json(users.err);
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { createUser, login, getUsers };
