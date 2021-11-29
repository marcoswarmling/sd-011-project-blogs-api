const express = require('express');
const { createdUser } = require('../services/userServices');
const tokenValidation = require('../middlewares/tokenValidation');
const getAllUsers = require('../services/userServices');

const router = express.Router();

const createUser = async (req, res) => {
  const user = await createdUser(req.body);
  return res.status(201).json(user);
};

router.get('/', tokenValidation, async (req, res) => {
  try {
    const getUsers = await getAllUsers();

    return res.status(200).json(getUsers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = createUser;