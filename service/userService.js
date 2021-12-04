const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'senhasecret';

const jwtConfig = {
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

const userModelFind = async (email, password) => {
    const userEmail = email;
    const senha = password;
    const findUser = await User.findOne({ where: { email: userEmail, password: senha } });
    if (findUser === null) {
        return { error: 'USER_NOT_FOUND' };
    }
    const { id } = findUser;
    const token = jwt.sign({ id }, secret, jwtConfig);
    const tokenGenerated = token;
    return { token: tokenGenerated };
};

const userModelFindAll = async () => {
    const userAll = await User.findAll();
    return userAll;
};

const userModelFindId = async (idUser) => {
    const findId = await User.findByPk(idUser);
    if (findId === null) return { error: 'USER_NOT_FOUND' };
    const { id, displayName, email, password, image } = findId;
    return { id, displayName, email, password, image };
};

module.exports = {
    userModelRegister,
    userModelFind,
    userModelFindAll,
    userModelFindId,
};