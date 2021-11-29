const { User } = require('../models');
const { Schema } = require('../services/validation');
const { sign } = require('../services/token');
const { ConflictError } = require('../errors');

const create = (userDataInput) => {
  new Schema('createUser').validate(userDataInput);

  return User.create(userDataInput)
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

module.exports = {
  create,
};
