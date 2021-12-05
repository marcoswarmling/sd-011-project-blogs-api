const { User } = require('../models');

// user create & token validation
const create = (userDataInput) => 
  User.create(userDataInput).then(({ dataValues }) => {
    const token = 'token';
    return { token, createdUser: dataValues };
  }).catch((err) => {
    throw err;
});

module.exports = create;
