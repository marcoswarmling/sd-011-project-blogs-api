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
