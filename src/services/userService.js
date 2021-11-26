const { User } = require('../../models');
const { generateNewToken } = require('../auth/createJWT');
const { validateReqBody, invalidReqBodyResponse } = require('./helpers');

const create = async ({ displayName, email, password, image }) => {
  const invalidReqBody = await validateReqBody({ displayName, email, password });

  if (invalidReqBody) return invalidReqBodyResponse(invalidReqBody);

  await User.create({ displayName, email, password, image });

  const token = await generateNewToken(email);

  return { responseMessage: { token }, statusCode: 201 };
};

const getAllUsers = async () => {
  const users = await User.findAll();
  const statusCode = 200;
  const responseMessage = users;

  return { statusCode, responseMessage };
};

module.exports = {
  create,
  getAllUsers,
};
