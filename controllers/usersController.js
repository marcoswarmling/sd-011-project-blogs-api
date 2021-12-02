const { Users } = require('../models');
const service = require('../services/usersService');

// esse controller está chamando o Users model (sequelize) e realizando a busca (findOne - where - mysql) para idenfificar o email e, caso não exista, criar o novo usuãrio.
const create = async (req, res) => {
  try {
  const { displayName, email, password, image } = req.body;
  // console.log('reqBodyController:', req.body);
    const userExists = await Users.findOne({ where: { email } });
    if (userExists) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const newUser = await service.create({ displayName, email, password, image });
    // console.log('newUserController:', newUser); --> recebe o token
    return res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json({ err: e.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await Users.findOne({ where: { email, password } });

    if (!userExists) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    // console.log('loginController', req.body);
 
    const token = await service.login({ email, password });
    // console.log('tokenController', token); --> recebe o token

    return res.status(200).json(token);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  login,
};