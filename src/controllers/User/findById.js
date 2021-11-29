const { User } = require('../../models');
const DefaultError = require('../../errors/DefaultError');
const { verifyToken } = require('../../jwt');

const findById = async (req, res, next) => {
  const { authorization: token } = req.headers;
  const { id } = req.params;
  try {
    const foundUser = await User.findByPk(id);

    verifyToken(token);

    if (!foundUser) throw new DefaultError('User does not exist', 404);

    return res.status(200).json(foundUser);
  } catch (error) {
    return next(error);
  }
};

module.exports = findById;