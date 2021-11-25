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

module.exports = {
  create,
};
