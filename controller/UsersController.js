const { User } = require('../models');

const getAllUser = async (_req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'server error' });
  }
};

module.exports = {
  getAllUser,
};
