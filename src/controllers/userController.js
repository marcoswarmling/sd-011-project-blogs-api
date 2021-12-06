const UserServices = require('../services/userService');
const { createToken } = require('../utils/token');

// user create
const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { dataValues } = await UserServices.create({ 
    displayName,
    email,
    password,
    image,
  });
  
  delete dataValues.password;
  const token = createToken({ payload: dataValues });
  res.status(201).json({ token });
};

// find user by id
const findById = async (req, res) => {
  const { id } = req.params;
  const user = await UserServices.findById(id);

  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  res.status(200).json(user);
};

// list all users
const listAll = async (_req, res) => {
  const allUsers = await UserServices.findAll();
  res.status(200).json(allUsers);
};

module.exports = {
  create,
  findById,
  listAll,
};
