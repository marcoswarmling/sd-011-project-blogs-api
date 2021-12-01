const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { isValid, jwtConfig, secret } = require('../schemas/userLogin');

const create = async (userToCreate) => {
    const { displayName, email, password, image } = userToCreate;
    
    const userExists = await User.findOne({ where: { email } });

    if (userExists) return { statusCode: 409, message: 'User already registered' };

    const validations = isValid(displayName, email, password);

    if (validations.message) return validations;

    const user = await User.create({ displayName, email, password, image });

    const { token } = jwt.sign({ data: user }, secret, jwtConfig);

    return { statusCode: 201, token };
};

module.exports = {
    create,
};  

// - Caso exista uma pessoa com o mesmo email na base, deve-se retornar o seguinte erro:

//   ```json
//   {
//     "message": "User already registered"
//   }
