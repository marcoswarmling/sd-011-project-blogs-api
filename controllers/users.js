const usersServices = require('../services/users');
const { status, intServerError } = require('../Helpers/status&messages');
const User = require('../models/user');
// const { generateToken } = require('../Helpers/authorizations');

const createNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await usersServices.createNewUser({ displayName, email, password, image });
    // const token = generateToken();
    return res.status(status.create).json({ user: newUser /* token */ });
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

const findAllUsers = async (req, res) => {
  const allUsers = User.findAll();
  res.status(200).json({ users: allUsers });
};

module.exports = { createNewUser, findAllUsers };
