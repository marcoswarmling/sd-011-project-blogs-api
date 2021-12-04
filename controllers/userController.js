require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const jwtConfig = { expiresIn: '120m', algorithm: 'HS256' };

const getAll = async (req, res) => {
  try {
    const users = await Users.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { email, password, displayName, image } = req.body; 
    const response = await Users.create({ email, password, displayName, image });
    const { dataValues } = response;
    const token = jwt.sign({ dataValues }, process.env.JWT_SECRET, jwtConfig);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, create };