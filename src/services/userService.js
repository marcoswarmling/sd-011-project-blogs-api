const validate = require('../middleware/validation');
const { user } = require('../../models');
const { createToken } = require('../middleware/jwt');

const newUser = async (displayName, email, password, image) => {
    validate.newUser(displayName, email, password);
  //  await validate.alreadyExist(email);
    const result = user.create({ displayName, email, password, image });
    const token = createToken(result);
    return token;
};

module.exports = {
    newUser,
};
