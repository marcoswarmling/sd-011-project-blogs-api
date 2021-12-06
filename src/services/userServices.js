const { User } = require('../models');
const jwt = require('../auth/jwt');

const userCreate = async (displayName, email, password, image) => {
const userCreated = await User.create(displayName, email, password, image);
const token = jwt.createJWT(userCreated);
return token;
};

module.exports = { userCreate };