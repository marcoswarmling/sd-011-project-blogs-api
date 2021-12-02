const service = require('../services/userServices');
require('dotenv').config();

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

    const findEmail = await service.getUserEmail(email);

    if (findEmail) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const newUser = await service.createUser({ displayName, email, password, image });

    return res.status(201).json({ token: newUser });
};

module.exports = {
  createUser,
};
