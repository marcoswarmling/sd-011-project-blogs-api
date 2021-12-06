const { Users } = require('../models');
const jwt = require('../auth/jwt');

const userCreate = async (displayName, email, password, image) => {
await Users.create(displayName, email, password, image);
const token = jwt.createJWT(email);
return token;
};

// const userbyId = async (id) => {
//   const user = await Users.findbyPk(id, { attributes: { exclude: ['password'] } });
//   return user;
// };

module.exports = { userCreate/* , userbyId */ };