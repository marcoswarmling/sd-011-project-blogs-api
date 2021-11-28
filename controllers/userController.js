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
    console.log(err);
    res.status(err.status).json({ message: err.message });
  }
}

module.exports = {
  createUser,
  userLogin,
};
