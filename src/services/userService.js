const { User } = require('../models');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createUser = async (displayName, email, password, image) => {
  try {
    console.log('Aqui linha 5 usererves imprime model user -->', User);
    const newUser = await User.create({ displayName, email, password, image });
    
    if (!newUser.displayName) {
      throw new Error({ message: 'Não deu para cadastrar' });
    }
    
    const token = jwt.sign(
      { data: { displayName, email } },
      process.env.SECRET, jwtConfig,
    );
    return token;
  } catch (error) {
    console.log('deu pau no services do user', error.message);
  }
};

module.exports = {
  createUser,
};
