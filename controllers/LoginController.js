const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = '123456';

const jwtConfig = {
  algorithm: 'HS256',
};

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }  
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { 
  login,
};
