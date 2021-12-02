const { User } = require('../models');
const { Schema } = require('../services/validation');
const { sign } = require('../services/token');
const { ConflictError, ValidationError, NotFoundError } = require('../errors');

const getDisplayResultFromModelResult = ({ dataValues }) => {
  const displayResult = { ...dataValues };
  delete displayResult.password;
  return displayResult;
};

const mapModelResultToDisplayResult = (result) => result.map(getDisplayResultFromModelResult);

const create = (userDataInput) => {
  new Schema('createUser').validate(userDataInput);

  return User.create(userDataInput) // TODO use hashing
    .then(({ dataValues }) => {
      const token = sign({ userId: dataValues.id });
      return { token, createdUser: dataValues };
    })
    .catch((err) => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictError('User already registered');
      }

      throw err;
    });
};

const getAll = () => User.findAll()
  .then(mapModelResultToDisplayResult);

const getById = (id) => User.findOne({ where: { id } })
  .then((foundUser) => {
    if (!foundUser) throw new NotFoundError('User does not exist');

    return getDisplayResultFromModelResult(foundUser);
  });

const login = (credentialsInput) => {
  new Schema('loginUser').validate(credentialsInput);

  const { email, password } = credentialsInput;

  return User.findOne({
    where: { email },
  })
  .then((foundUser) => {
    if (!foundUser) throw new ValidationError('Invalid fields'); // TODO use authorization error instead

    if (foundUser.password !== password) throw new ValidationError('Invalid fields'); // TODO use hashing

    const token = sign({ userId: foundUser.id });

    return { token };
  });
};

module.exports = {
  create,
  login,
  getAll,
  getById,
};
