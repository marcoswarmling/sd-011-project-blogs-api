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

module.exports = {
  addNewUser,
};
