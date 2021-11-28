const userService = require('../services/userService');

async function createUser(req, res) {
  const userObj = req.body;
  try {
    const result = await userService.createUser(userObj);
    return res.status(201).json({ token: result });
  } catch (error) {
    const err = JSON.parse(error.message);
    // console.log(error);
    res.status(err.status).json({ message: err.message });
  }
}

async function userLogin(req, res) {
  const loginObj = req.body;
  try {
    const result = await userService.userLogin(loginObj);
    return res.status(200).json({ token: result });
  } catch (error) {
    const err = JSON.parse(error.message);
    // console.log(err);
    res.status(err.status).json({ message: err.message });
  }
}

async function getAllUsers(_req, res) {
  try {
    const result = await userService.getAllUsers();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: 'not found' });
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const result = await userService.getUserById(id);
    return res.status(200).json(result);
  } catch (error) {
    const err = JSON.parse(error.message);
    return res.status(err.status).json({ message: err.message });
  }
}

module.exports = {
  createUser,
  userLogin,
  getAllUsers,
  getUserById,
};
