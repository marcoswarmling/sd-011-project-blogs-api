const { validate } = require('validate.js');
const { User } = require('../../models');
const { generateToken } = require('../../jwt');

const validator = require('../../validations/requestsParams/login');
const DefaultError = require('../../errors/DefaultError');

const verifyFields = (fields, rules) => {
  const verify = validate(fields, rules);

  if (verify) {
    const [[errorMessage]] = Object.values(verify);
    throw new DefaultError(errorMessage);
  }

  return true;
};

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    verifyFields({ email, password }, validator.rules);

    const foundUser = await User.findOne({ where: { email, password } });
    if (!foundUser) throw new DefaultError('Invalid fields');

    const token = generateToken({ email });
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};