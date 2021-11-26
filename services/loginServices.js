const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const jwtKey = process.env.JWT_SECRET;

const getUserByEmail = async (email) => Users.findOne({ where: { email } });

const createToken = (email, password) => jwt.sign({ data: { email, password } }, jwtKey);

module.exports = {
  getUserByEmail,
  createToken,
};