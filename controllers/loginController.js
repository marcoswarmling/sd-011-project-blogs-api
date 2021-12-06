const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { User } = require('../models');

const secret = 'blogsApiProject';

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email: { [Op.eq]: email } } });
    const { password, ...userWithoutPassword } = user;

    const payload = {
      userWithoutPassword,
    };

    const token = jwt.sign(payload, secret, jwtConfig);
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Não foi possível efetuar o login' });
  }
};

module.exports = login;