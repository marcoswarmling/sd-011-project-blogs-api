const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'senhasecret';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const userModelRegister = async (displayName, email, password, image) => {
    const userEmail = email;
    const returnCreationUser = await User.findOrCreate({
        where: { email: userEmail },
        default: {
            displayName,
            email,
            password,
            image,
        },
    });
    if (returnCreationUser === null) {
        return { error: 'Email_Exists' };
    }
    const token = jwt.sign({ displayName, email }, secret, jwtConfig);
    return { token };
};

module.exports = {
    userModelRegister,
};