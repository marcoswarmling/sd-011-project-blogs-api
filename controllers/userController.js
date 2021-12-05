const db = require('../models');
const jwtToken = require('../authorization/jwtToken');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await db.Users
    .findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json(error.message); 
  }
};

const createUser = async (req, res) => {
  const newUser = req.body;
  const { email } = newUser;     
    try {
      await db.Users.create(newUser);
      const getNewUser = await db.Users.findOne({
        where: { email },
      });
      const { id, displayName, image } = getNewUser;
      const token = jwtToken({ id, displayName, email, image });
      console.log({ token });
      return res.status(201).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const getUser = await db.Users.findOne({ where: { id } });
  if (getUser) {
    return res.status(200).json(getUser);
  }
    return res.status(404).json({ message: 'User does not exist' });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
};