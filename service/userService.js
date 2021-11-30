const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'senhasecret';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const userModelRegister = async (displayName, email, password, image) => {
    const userEmail = email;
    const findUser = await User.findOne({ where: { email: userEmail } });

    if (findUser !== null) {
        return { error: 'Email_Exists' };
    }

    await User.create({ displayName, email, password, image });

    const token = jwt.sign({ displayName, email }, secret, jwtConfig);
    return { token };
};

const userModelFind = async (token, email, password) => {
    const userEmail = email;
    const senha = password;
    const findUser = await User.findOne({ where: { email: userEmail, password: senha } });

    if (findUser === null) {
        return { error: 'USER_NOT_FOUND' };
    }
    const tokenUser = token;
    return { token: tokenUser };
};

const userModelFindAll = async () => {
    const userAll = await User.findAll();
    return userAll;
};

module.exports = {
    userModelRegister,
    userModelFind,
    userModelFindAll,
};