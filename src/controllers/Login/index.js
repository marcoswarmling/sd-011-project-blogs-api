const { User } = require('../../models');
const { generateToken } = require('../../jwt');

const DefaultError = require('../../errors/DefaultError');
const verifyFields = require('../../validations/verifyFields');
const { rules } = require('../../validations/requestsParams/login');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    verifyFields({ email, password }, rules);

    const foundUser = await User.findOne({ where: { email, password } });
    if (!foundUser) throw new DefaultError('Invalid fields');

    const token = generateToken({ userId: foundUser.id });
    res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};