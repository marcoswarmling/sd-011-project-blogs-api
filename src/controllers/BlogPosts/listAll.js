const { verifyToken } = require('../../jwt');
const { Category } = require('../../models');

const listAll = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    verifyToken(token);

    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = listAll;