const createAuthentication = require('../middlewares/auth/auth');
const { Users } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const findEmailUser = await Users.findOne({ where: { email } });
    
    if (findEmailUser) return { error: 'Email_Exists' };

    const user = await Users.create({ displayName, email, password, image });

    const userWithoutPWD = {
      id: user.id,
      displayName,
      email,
    };

    const token = await createAuthentication(userWithoutPWD);
    return token;
};

module.exports = { createUser };