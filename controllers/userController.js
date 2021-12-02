const jwt = require('jsonwebtoken');
const { User } = require('../models');

const somethingIsWrong = 'Something is wrong!';

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const emailExists = await User.findOne({ where: { email } });

    if (emailExists) {
      return res.status(409).json({ message: 'User already registered' });
    }

    await User.create({ displayName, email, password, image });

    const token = jwt.sign({ displayName, email }, process.env.JWT_SECRET);

    return res.status(201).json({ token });
  } catch (error) {
    res.status(500).json(somethingIsWrong);
  }
};

module.exports = {
  createUser,
};
