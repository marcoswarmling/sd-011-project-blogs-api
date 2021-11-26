const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const SECRET_JWT = process.env.SECRECT_JWT;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createUser = async (displayName, email, password, image) => {
    const findEmailUser = await Users.findOne({ where: { email } });
    
    if (findEmailUser) return { error: 'Email_Exists' };

    await Users.create({ displayName, email, password, image });

    const userWithoutPWD = {
      displayName,
      email,
    };

    const token = jwt.sign({ data: userWithoutPWD }, SECRET_JWT, jwtConfig);
    return token;
};

module.exports = { createUser };