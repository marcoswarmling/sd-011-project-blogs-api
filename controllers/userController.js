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

module.exports = {
  createUser,
};
