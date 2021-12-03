const jwt = require('jsonwebtoken');
const { User } = require('../models');

const somethingIsWrong = 'Something is wrong!';

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const emailExists = await User.findOne({ where: { email } });

    if (emailExists) {
      return res.status(409).json({ message: 'User already registered' });
    }

    await User.create({ displayName, email, password, image });

    const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET);

    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json(somethingIsWrong);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ where: { email, password } });

    if (!userExists) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json(somethingIsWrong);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createUser,
  userLogin,
  getAllUsers,
  getUserById,
};
