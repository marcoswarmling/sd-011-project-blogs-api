const jwt = require('jsonwebtoken');
const { jwtConfig, secret } = require('../schemas/userSchema');
const { loginValid } = require('../schemas/loginSchema');
const { User } = require('../models');

const loginUser = async (email, password) => {
    const validations = loginValid(email, password);

    if (validations.message) return validations;

    const userExists = await User.findOne({ where: { email } });

    if (!userExists) return { statusCode: 400, message: 'Invalid fields' };

    const token = jwt.sign({ data: userExists }, secret, jwtConfig);

    return { statusCode: 200, token };
};

module.exports = {
    loginUser,
};