const db = require('../models');
const jwtToken = require('../auth/JWTtoken');

const getAllUsers = async (_req, res) => {
  try {
    const response = await db.User.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    await db.User.create({ displayName, email, password, image });

    const token = jwtToken({ displayName, email });

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  
  const getUser = await db.User.findOne({ where: { id } });

  if (getUser) {
    return res.status(200).json(getUser);
  }
  return res.status(404).json({ message: 'User does not exist' });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
