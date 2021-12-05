const validate = require('../middleware/validation');
const { user } = require('../../models');

const newUser = async (displayName, email, password, image) => {
    validate.newUser(displayName, email, password);
  //  await validate.alreadyExist(email);
    const result = user.create({ displayName, email, password, image });
    return result;
};

module.exports = {
    newUser,
};
