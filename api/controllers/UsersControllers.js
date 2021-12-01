const usersServices = require('../services/usersServices');

const createUser = async (req, res) => {
  const newUser = req.body;

   const token = await usersServices.createUser(newUser);

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};
