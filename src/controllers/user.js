const { UniqueConstraintError } = require('sequelize');
const { userServices, loginServices } = require('../services');
const httpCodes = require('../constants/httpCodes.json');
const errorMessages = require('../constants/errorMessages.json');
const AppError = require('../errorHandler/AppError');

exports.createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userServices.createUserSvc({ displayName, email, password, image });
    const token = await loginServices.loginUserSvc({
      email: newUser.email,
      password: newUser.password,
    });
    return res.status(httpCodes.HTTP_CREATED).json({ token });
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      return next(new AppError(
        httpCodes.HTTP_CONFLICT,
        errorMessages.CONFLICT_AUTH,
      ));
    }
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(httpCodes.HTTP_OK).json(users);
  } catch (error) {
    next(error);
  }
};

exports.getByUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userServices.getByUserId(id);
    if (user) return res.status(httpCodes.HTTP_OK).json(user);
    throw new AppError(httpCodes.HTTP_NOT_FOUND, errorMessages.USER_NOT_FOUND);
  } catch (error) {
    next(error);
  }
};
