const { User } = require('../models');

const isValidEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const generateToken = (user) => {
  return 'abcdadfskfsak1212';
}

const createUser = async(data) => {
  try {
    const { displayName, email, password, image } = data;

    if(displayName.length < 8) {
      return { message: '"displayName" length must be at least 8 characters long', status: 400 };
    }

    if(!email) {
      return { message: '"email" is required', status: 400 }
    }


    if(!isValidEmail(email)) {
      return { message: '"email" must be a valid email', status: 400 }
    }

    const userAlreadyExits = await User.findOne({ where: {
      email: email
    }});

    console.log(userAlreadyExits)
    if(userAlreadyExits !== null) {
      return { message: 'User already registered', status: 409 };
    }

    if(!password) {
      return { message: '"password" is required', status: 400 }
    }

    if(password.length < 6) {
      return { message: '"password" length must be 6 characters long', status: 400 }
    }

    const newUser = await User.create({displayName, email, password, image });

    return {token: generateToken(newUser)};
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
}


module.exports = {
  createUser,
}