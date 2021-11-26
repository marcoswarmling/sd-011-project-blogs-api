const userService = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
  const { body } = req;

  console.log(body);
  const response = await userService.createUser(body);

  return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createUser,
};