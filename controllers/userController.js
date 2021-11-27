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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const responseFromValidation = await userServices
    .getUserById(id, authorization);

  if (!responseFromValidation) {
    return res.status(status.NOT_FOUND)
      .json({ message: 'User does not exist' });
  }

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

module.exports = { getAllUsers, createUser, getUserById };