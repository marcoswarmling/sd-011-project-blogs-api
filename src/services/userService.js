const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  try {
    console.log('Aqui linha 5 usererves imprime model user -->', User);
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
  } catch (error) {
    console.log('deu pau no services do user', error.message);
  }
};

module.exports = {
  createUser,
};
