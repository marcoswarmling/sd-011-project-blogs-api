require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const jwtConfig = { expiresIn: '120m', algorithm: 'HS256' };

// Vini Gouveia me ajudou com o raw: true para mostrar defaultValues 
const getAll = async (_req, res) => {
  try {
    console.log('aquiii');
    const attributes = ['id', 'displayName', 'email', 'image'];
    const users = await Users.findAll({ attributes }, { raw: true });
    // console.log('getAll', users);
    return res.status(200).json(users);
  } catch (err) {
    // console.log('getAll', err.message);
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const response = await Users.findByPk(req.params.id);
    if (!response) return res.status(404).json({ message: 'User does not exist' });
    const { id, displayName, email, image } = response;
    return res.status(200).json({ id, displayName, email, image });
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

const login = async (req, res) => {
  try {
    const users = await Users.findAll();
    console.log('users', users);
    const { email, password } = req.body; 
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getById, create, login };