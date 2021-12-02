const { User } = require('../models');
const { Schema } = require('../services/validation');
const { sign } = require('../services/token');
const { ConflictError, ValidationError, NotFoundError } = require('../errors');

const getDisplayResultFromModelResult = ({ dataValues }) => dataValues;

const mapModelResultToDisplayResult = (result) => result.map(getDisplayResultFromModelResult);

const create = (userDataInput) => {
  new Schema('createPost').validate(userDataInput);

  return Promise.resolve({});

  // return User.create(userDataInput) // TODO use hashing
  //   .then(({ dataValues }) => {
  //     const token = sign({ userId: dataValues.id });
  //     return { token, createdUser: dataValues };
  //   })
  //   .catch((err) => {
  //     if (err.name === 'SequelizeUniqueConstraintError') {
  //       throw new ConflictError('User already registered');
  //     }

  //     throw err;
  //   });
};
module.exports = {
  create,
};
