const usersServices = require('../services/usersServices');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await usersServices.createUser(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'error interno' });
  }
};

module.exports = {
  createUser,
};