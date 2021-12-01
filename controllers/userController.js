// const { User } = require('../models');
const service = require('../services/userServices');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await service.createUser({ displayName, email, password, image });

  return res.status(201).json({ token: newUser });
};

module.exports = createUser;
