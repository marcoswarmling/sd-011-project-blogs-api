const ApiError = require('../utils/ApiError');
const HttpCodes = require('../utils/HttpCodes');
const UserService = require('../services/user.services');

async function createUser(req, res, next) {
  try {
    const { email } = req.body;

    const getEmail = await UserService.getUserByEmail(email);

    console.log(getEmail);
    return res.status(HttpCodes.code.OK).send('Olá mundo no createUser!');
  } catch (err) {
    console.log('ERRO:', err);
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  createUser,
};
