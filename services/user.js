const { User } = require('../models');

const createUser = async(data) => {
  try {
    const { displayName, email, password, image } = data;

    if(displayName.length < 8) {
      console.log('ENTROU AQUIIII')
      return { message: '"displayName" length must be at least 8 characters long', status: 400 };
    }
    const newUser = await User.create({displayName, email, password, image });

    return newUser;
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
}


module.exports = {
  createUser,
}