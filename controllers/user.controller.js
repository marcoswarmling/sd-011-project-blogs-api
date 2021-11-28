const ApiError = require('../utils/ApiError');
const HttpCodes = require('../utils/HttpCodes');
const UserService = require('../services/user.services');

async function createUser(req, res, next) {
  try {
    const { displayName, email, password, image } = req.body;

    const emailExists = await UserService.getUserByEmail(email);

    if (!emailExists) {
      await UserService.createUserInDB({ displayName, email, password, image });
      res.status(HttpCodes.code.OK).send('criado');
    }
  
    return next(ApiError.alreadyRegistered());
  } catch (err) {
    console.log('ERRO:', err);
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  createUser,
};
