const { User } = require('../models');
const { Conflicts } = require('../errors');

// user create & token validation
const create = (userDataInput) => 
  User.create(userDataInput).then(({ dataValues }) => {
    const token = 'token';
    return { token, createdUser: dataValues };
  }).catch((err) => {
    if (err.name === 'SequelizeUniqueConstrainError') {
      throw new Conflicts('User already registered');
    }
    throw err;
});

module.exports = create;
