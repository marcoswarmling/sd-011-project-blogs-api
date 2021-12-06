const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'my-hardcoded-secret';

const isValidEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const generateToken = (user) => {
  const token = jwt.sign(user, secret);
  return token;
};

const createUser = async (data) => {
  try {
    const { displayName, email, password, image } = data;

    if (!isValidEmail(email)) {
      return { message: '"email" must be a valid email', status: 400 };
    }

    const userAlreadyExits = await User.findOne({ where: {
      email,
    } });

    if (userAlreadyExits !== null) {
      return { message: 'User already registered', status: 409 };
    }

    const newUser = await User.create({ displayName, email, password, image });

    return { token: generateToken({ email: newUser.email, user_id: newUser.id }) };
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

const validateLogin = async (data) => {
  try {
    const { email, password } = data;

    const users = await User.findAll({ where: 
      {
        email,
        password,
      },
      raw: true, 
    });

    if (users.length === 0) {
      return { message: 'Invalid fields', status: 400 };
    }
    return { 
      token: generateToken({
        email: users[0].email,
        user_id: users[0].id,
      }),
    };
  } catch (error) {
    console.log(error.message);
    return { 
      message: 'Algo deu errado',
      status: 500, 
    };
  }
};

const getAllUsers = async () => {
  try {
    const result = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return result;
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

const getUserById = async (data) => {
  const { id } = data;
  try {
    const user = await User.findOne({ 
      where: {
        id,
      },
      attributes: [
        'id', 'displayName', 'email', 'image',
      ],
    });

    if (!user) {
      return { message: 'User does not exist', status: 404 };
    }
    return user;
  } catch (error) {
    console.log(error.message);

    return { message: 'Algo deu errado', status: 500 };
  }
};

module.exports = {
  createUser,
  validateLogin,
  getAllUsers,
  getUserById,
};