const { User } = require('../../models');
const { generateToken } = require('../../jwt');
const DefaultError = require('../../errors/DefaultError');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ where: { email, password } });

    if (!foundUser) throw new DefaultError('Invalid fields');

    const token = generateToken({ email });
    res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};