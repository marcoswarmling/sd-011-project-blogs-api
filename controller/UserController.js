const db = require('../models');
const jwtToken = require('../auth/JWTtoken');

const getAllUsers = async (_req, res) => {
  try {
    const response = await db.Users.findAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const createUser = async (req, res) => {
  const { email } = req.body;
  try {
    await db.Users.create(req.body);
    const getUser = await db.Users.findOne({ where: { email } });
    const { id, displayName, image } = getUser;

    const token = jwtToken({ id, displayName, email, image });

    return res.status(201).json({ token });
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
  createUser,
  getAllUsers,
  getUserById,
};
