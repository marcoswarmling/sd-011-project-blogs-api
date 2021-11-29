const { verifyToken } = require('../../jwt');
const { User } = require('../../models');

const createUser = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    verifyToken(token);

    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = createUser;