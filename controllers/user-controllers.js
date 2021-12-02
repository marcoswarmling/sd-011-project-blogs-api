const { User } = require('../models');
const { newToken } = require('../auth/token');

const addNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { userData } = await User.create({
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
  const userExist = await User.findOne({ where: { email } });

  if (!userExist || password !== userExist.dataValues.password) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  const token = newToken({ payload: userExist });

  return res.status(200).json({ token });
};

const listAllUsers = async (_req, res) => {
  const getUsers = await User.findAll();

  return res.status(200).json(getUsers);
};

module.exports = {
  addNewUser,
  loginUser,
  listAllUsers,
};
