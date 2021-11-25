const { User } = require('../models');
const { createNewToken } = require('../auth/createJWT');

const createNewUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });

  if (user) return { statusCode: 409, response: { message: 'User already registered' } };

  await User.create({ displayName, email, password, image });

  const token = await createNewToken(email, password);

  return { statusCode: 201, response: { token } };
 };

 const getAllUsers = async () => {
  const user = await User.findAll();

  const removePassword = user
    .map(({ id, displayName, email, image }) => ({ id, displayName, email, image }));

  return { statusCode: 200, response: removePassword };
 };

 module.exports = {
  createNewUser,
  getAllUsers,
};