const { User } = require('../models');
const { createNewToken } = require('../auth/createJWT');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) return res.status(409).json({ message: 'User already registered' });

    await User.create({ displayName, email, password, image });

    const token = await createNewToken(email);

    return res.status(201).json({ message: token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createUser,
};