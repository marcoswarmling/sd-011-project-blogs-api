const UserServ = require('../services/users');
const { createToken } = require('../utils/token');

// user create
const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { dataValues } = await UserServ.create({ 
    displayName,
    email,
    password,
    image,
  });
  
  delete dataValues.password;
  const token = createToken({ payload: dataValues });

  res.status(201).json({ token });
};

// user login
const login = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await UserServ.findEmail(email);

  if (!findUser || findUser.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  delete findUser.password;
  const token = createToken({ payload: findUser });

  res.status(200).json({ token });
};

// list users by id
const findById = async (req, res) => {
  const { id } = req.params;
  const user = await UserServ.findById(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.status(200).json(user);
};

// list all users
const listAll = async (_req, res) => {
  const allUsers = await UserServ.findAll();

  res.status(200).json(allUsers);
};

module.exports = {
  create,
  login,
  findById,
  listAll,
};
