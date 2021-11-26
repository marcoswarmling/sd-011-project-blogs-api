const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

const { getUserByCredentials } = require('../services/loginServices');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userData = await getUserByCredentials(email, password);
  const { displayName, id } = userData.dataValues;
  const token = jwt.sign({ data: { displayName, email, id } }, secretKey);
  
  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};