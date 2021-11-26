const userServices = require('../services/index');
const { status } = require('../schemas');
const { generateToken } = require('../helpers/generateJWT');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const responseFromValidation = await userServices.createUser({
    displayName, email, password, image });

  if (responseFromValidation.error) {
    const { message, code } = responseFromValidation.error;
    return res.status(code).json({ message });
  }

  const token = generateToken(responseFromValidation);

  return res.status(status.CREATED).json({ token });
};

module.exports = {
  createUser,
};
