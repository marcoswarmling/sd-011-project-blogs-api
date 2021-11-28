const jwt = require('jsonwebtoken');
const { Users } = require('../models');

require('dotenv').config();

const createUser = async (req, res) => {
  const { email, password, image, displayName } = req.body;

  try {
    const doesUserExists = await Users.findOne({ where: { email } });
    if (doesUserExists) {
      return res.status(409).json({ message: 'User already registered' });
    }

    await Users.create({ displayName, email, password, image });
    
    const token = jwt.sign({
      displayName,
      email,
    }, 'secret', { expiresIn: '8h' });

    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createUser,
};
