const ApiError = require('../utils/ApiError');
const HttpCodes = require('../utils/HttpCodes');
const UserService = require('../services/user.services');
const generateJWT = require('../utils/generateJWT');

async function logIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const emailExists = await UserService.getUserByEmail(email);

    if (!emailExists || emailExists.password !== password) {
      return next(ApiError.invalidFields());
    }

    const { displayName } = emailExists.dataValues;
    const token = generateJWT({ displayName, email });
    return res.status(HttpCodes.code.OK).json({ token });
  } catch (err) {
    console.log('ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRROR', err);
    return next(ApiError.internalServerError());
  }
}

module.exports = {
  logIn,
};
