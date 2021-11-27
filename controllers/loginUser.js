const userServices = require('../services/index');
const { status } = require('../schemas');
const { generateTokenOnLogin } = require('../helpers/generateJWT');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const responseFromValidation = await userServices.loginUser({ email, password });

  if (!responseFromValidation) {
    return res.status(status.BAD_REQUEST).json({ message: 'Invalid fields' });
  }

  if (responseFromValidation.error) {
    const { message, code } = responseFromValidation.error;
    return res.status(code).json({ message });
  }

  const token = generateTokenOnLogin(responseFromValidation);

  return res.status(status.OK).json({ token });
};

module.exports = loginUser;