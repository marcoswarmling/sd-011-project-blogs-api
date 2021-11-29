const ApiError = require('../utils/ApiError');
const HttpCodes = require('../utils/HttpCodes');
const UserService = require('../services/user.services');
const generateJWT = require('../utils/generateJWT');

async function createUser(req, res, next) {
  try {
    const { displayName, email, password, image } = req.body;

    const emailExists = await UserService.getUserByEmail(email);

    if (!emailExists) {
      await UserService.createUserInDB({ displayName, email, password, image });
      const token = generateJWT({ displayName, email });
      return res.status(HttpCodes.code.CREATED).json({ token });
    }
  
    return next(ApiError.alreadyRegistered());
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}

async function findAllUsers(_req, res, next) {
  try {
    const users = await UserService.getAllUsersInDB();

    return res.status(HttpCodes.code.OK).json(users);
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}

async function findUserById(req, res, next) {
  try {
    const { id } = req.params;

    const user = await UserService.getUserById(id);

    if (!user) return next(ApiError.userNotFound());

    return res.status(HttpCodes.code.OK).json(user);
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
};
