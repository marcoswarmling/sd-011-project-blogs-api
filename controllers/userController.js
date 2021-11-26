const jwt = require('jsonwebtoken');
const { Users } = require('../models');

require('dotenv').config();

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  try {
    const isDuplicatedUser = await Users.findOne({ where: { email } });
    if (isDuplicatedUser) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const token = jwt.sign({
      displayName,
      email,
    }, process.env.JWT_SECRET, { expiresIn: '1h' });

    await Users.create({ displayName, email, password, image });

    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createUser,
};
