const { User } = require('../models');
const { Conflict } = require('../errors/conflicts');

// user create & token validation
const create = (userDataInput) => 
  User.create(userDataInput).then(({ dataValues }) => {
    const token = 'token';
    return { token, createdUser: dataValues };
  }).catch((err) => {
    if (err.name === 'SequelizeUniqueConstrainError') {
      throw new Conflict('User already registered');
    }
    throw err;
});

module.exports = create;
