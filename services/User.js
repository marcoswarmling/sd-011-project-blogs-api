const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { isValid, jwtConfig, secret } = require('../schemas/userSchema');

const create = async (userToCreate) => {
    const { displayName, email, password, image } = userToCreate;

    const validations = isValid(displayName, email, password);

    if (validations.message) return validations;

    const userExists = await User.findOne({ where: { email: userToCreate.email } });

    if (userExists) return { statusCode: 409, message: 'User already registered' };

    const user = await User.create({ displayName, email, password, image });

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    return { statusCode: 201, token };
};

const getAll = async () => {
    const result = await User.findAll();
    return result;
};

module.exports = {
    create,
    getAll,
};
