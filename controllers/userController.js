const { Op } = require('sequelize');
const { User } = require('../models');
// const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const data = await User.create({ displayName, email, password, image });

    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao fazer o cadastro' });
  }
};

const getUsers = async (req, res) => {
  try {
    /* Para retornar os dados do usuário excluindo a senha:
    https://stackoverflow.com/questions/27972271/sequelize-dont-return-password */
    const users = await User.findAll(
      {
        attributes: { exclude: ['password'] }, 
      },
    );

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao buscar os usuários' });
  }
};

const getUserById = async (req, res) => {
  try {
    /* Para retornar os dados do usuário excluindo a senha:
    https://stackoverflow.com/questions/27972271/sequelize-dont-return-password */
    const users = await User.findOne(
      { where: { id: { [Op.eq]: req.params.id } },
      },
      { attributes: { exclude: ['password'] } },
    );

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu um erro ao buscar os usuários' });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
