const { status } = require('../schemas');
const userServices = require('../services/index');
const { generateToken } = require('../helpers/JWTfunctions');

const getAllUsers = async (req, res) => {
  const { authorization } = req.headers;

  const responseFromValidation = await userServices.getAllUsers(authorization);

  if (responseFromValidation.error) {
    const { message, code } = responseFromValidation.error;
    return res.status(code).json({ message });
  }

  return res.status(status.OK).json(responseFromValidation);
};

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

module.exports = { getAllUsers, createUser };