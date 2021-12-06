const { Users } = require('../models');
const { newToken } = require('../auth/token');

const addNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { userData } = await Users.create({
      displayName,
      email,
      password,
      image,
    });
    const token = newToken({ data: userData });
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await Users.findOne({ where: { email } });

  if (!userExist || password !== userExist.dataValues.password) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  const token = newToken({ payload: userExist });

  return res.status(200).json({ token });
};

const listAllUsers = async (_req, res) => {
  const getUsers = await Users.findAll();

  return res.status(200).json(getUsers);
};

const listUserById = async (req, res) => {
  const { id } = req.params;

  const getUserId = await Users.findByPk(id);

  res.status(200).json(getUserId);
};

module.exports = {
  addNewUser,
  loginUser,
  listAllUsers,
  listUserById,
};
