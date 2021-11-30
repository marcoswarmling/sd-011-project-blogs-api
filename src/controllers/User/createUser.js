const { User } = require('../../models');
const verifyIsUserUnique = require('../../validations/isUserUnique');
const { generateToken } = require('../../jwt');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    await verifyIsUserUnique(User, email);
    const { id: userId } = await User.create({ displayName, email, password, image });
    
    const token = generateToken({ userId });

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};

module.exports = createUser;