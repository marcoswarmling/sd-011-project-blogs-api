const jwt = require('jsonwebtoken');
const services = require('../services/users');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { 
    displayName,
    email,
    password,
    image,
   } = req.body;
  
  await services.createUser(displayName, email, password, image);

  const userToken = jwt.sign({ data: displayName }, secret, jwtConfig);

  return res.status(201).json({ token: userToken });
};

module.exports = {
  createUser,
};
